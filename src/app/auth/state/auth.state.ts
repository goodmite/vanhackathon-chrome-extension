import {State, Action, StateContext} from '@ngxs/store';
import {Login$, SetUser} from './auth.actions';
import {IUser} from '../../typings/auth';
import {map} from 'rxjs/operators';
import {AuthStorageService} from '../auth.service';

export interface IAuthState {
  user: IUser | null;
}

@State<IAuthState>({
  name: 'auth',
  defaults: {
    user: null
  }
})
export class AuthState {
  constructor(private authService: AuthStorageService) {
  }

  @Action(SetUser)
  setUser(ctx: StateContext<IAuthState>, {payload}: SetUser) {
    ctx.setState({user: payload.user});
  }

  @Action(Login$)
  performLogin(ctx: StateContext<IAuthState>, {payload}: Login$) {
    return this.authService.performLogin(payload.loginData)
      .pipe(map((loginResponse: {user: IUser}) => {
        return ctx.dispatch(new SetUser({user: loginResponse.user}));
      }));
  }
}

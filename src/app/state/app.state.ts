import { State, Action, StateContext } from '@ngxs/store';
import { AppAction } from './app.actions';
import {AppStateModel} from '../typings/store/app';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    items: []
  }
})
export class AppState {
  @Action(AppAction)
  add(ctx: StateContext<AppStateModel>, action: AppAction) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}

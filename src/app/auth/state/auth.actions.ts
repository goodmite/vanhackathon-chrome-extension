import {ILoginData, IUser} from '../../typings/auth';

export class SetUser {
  static readonly type = '[login page] set user';
  constructor(public payload: {user: IUser}) { }
}

export class Login$ {
  static readonly type = '[App] Add item';
  constructor(public payload: {loginData: ILoginData}) { }
}

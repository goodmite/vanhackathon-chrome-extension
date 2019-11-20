import {Injectable} from '@angular/core';
import {HttpService} from '../../../projects/http/src/lib/http.service';
import {ILoginData, IUser} from '../typings/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private static user: IUser | null;

  constructor(private httpService: HttpService) {
  }

  static setUser(user: IUser) {
    AuthStorageService.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  static getUser(): IUser|null {
    return AuthStorageService.user;
  }

  static removeUser() {
    localStorage.removeItem('user');
    AuthStorageService.user = null;
  }

  performLogin(loginData: ILoginData) {
    const url = `https://conduit.productionready.io/api/users/login`;
    const body = {user: loginData};
    return this.httpService.makePostReq<{ user: IUser }>(url, body);
  }
}

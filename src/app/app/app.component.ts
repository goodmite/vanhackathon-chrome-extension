import {Component, OnInit} from '@angular/core';
import {EPage} from '../typings/page';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider} from 'angular-6-social-login';
import {PageService} from '../services/page.service';
import {HttpService} from '../../../projects/http/src/lib/http.service';
import {UrlService} from '../services/url.service';
import {IUser} from '../typings/auth';
import {AuthStorageService} from '../auth/auth.service';
import {SocketService} from '../socket.service';

@Component({
  selector: 'ngp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-perfect';
  page: EPage = EPage.login;
  EPage = EPage;
  user: IUser | null = null;


  constructor(
    private pageService: PageService,
    private socialAuthService: AuthService,
    private httpService: HttpService,
  ) {
  }

  ngOnInit(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        AuthStorageService.setUser(JSON.parse(userStr));
        this.page = EPage.profile;
      } catch (e) {
        console.log(e);
      }
    }
    this.pageService.pageChangedNotifier().subscribe((page: EPage) => {
      this.page = page;
    });
  }


  logoutHandler() {
    AuthStorageService.removeUser();
    SocketService.count = 0;
    this.page = EPage.login;
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == 'linkedin') {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider as any).then(
      (user) => {
        this.startAuth(user as any, 'signup');
      }
    );
  }

  startAuth(userData: IUser, action: string) {
    const url: string = UrlService.getSignUpUrl();
    const body = {
      ...userData,
    };

    if (action === 'login') {
      this.httpService.makePostReq<IUser>(url, body)
        .subscribe((user: IUser) => {
          this.page = EPage.profile;
          AuthStorageService.setUser(user);

        });
    } else {
      this.httpService.makePutReq<IUser>(url, body)
        .subscribe((user: IUser) => {
          this.page = EPage.profile;
          AuthStorageService.setUser(user);
        });
    }

  }

  // @ts-ignore
  loginHandler({user, action}) {

    if (user.provider) {
      this.socialSignIn(user.provider);
    } else {
      this.startAuth(user, action);
    }
  }


}

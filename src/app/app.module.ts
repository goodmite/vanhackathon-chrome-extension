import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app/app.component';
import {NgxsModule} from '@ngxs/store';
import {AppState} from './state/app.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {environment} from '../environments/environment';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {HttpModule} from '../../projects/http/src/lib/http.module';
import {AuthModule} from './auth/auth.module';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {CoreModule} from './core/core.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {PostState} from './core/core/posts/state/post.state';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider, LinkedinLoginProvider,
} from 'angular-6-social-login';
import {ClickOutsideModule} from 'ng-click-outside';
import {HttpTrackerLibModule} from 'ngx-loadify';
import {SocketService} from './socket.service';

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('Your-Facebook-app-id')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('746462136767-qf053nkk22pctfv40a7krt12jm00fpqk.apps.googleusercontent.com')
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider('1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com')
      },
    ])
  ;
  return config;
}

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    CoreModule,
    NgxsModule.forRoot([
      AppState,
      PostState
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    HttpModule,
    AuthModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClickOutsideModule,
    HttpTrackerLibModule.forRoot({})
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
  SocketService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

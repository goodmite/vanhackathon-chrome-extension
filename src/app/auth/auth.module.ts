import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzToolTipModule,
  NzTypographyModule
} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './state/auth.state';
import {HttpTrackerLibModule} from 'ngx-loadify';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzCheckboxModule,
    NzInputModule,
    NgxsModule.forFeature([AuthState]),
    HttpTrackerLibModule.forRoot({
      errorClass: 'error',
      errorClassDuration: 2000
    }),
    NzIconModule,
    NzTypographyModule,
    NzToolTipModule
  ]
})
export class AuthModule {
}

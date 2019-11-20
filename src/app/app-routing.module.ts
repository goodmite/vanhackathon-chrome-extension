import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostDetailComponent} from './core/core/posts/post-detail/post-detail.component';
import {CoreComponent} from './core/core/core.component';
import {PostWrapperComponent} from './core/core/posts/post-wrapper/post-wrapper.component';
import {PostEditComponent} from './core/core/posts/post-edit/post-edit.component';
import {LoginComponent} from './auth/login/login.component';
import {PostTeaserListComponent} from './core/core/posts/post-teaser-list/post-teaser-list.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'core', component: CoreComponent, children: [
      // {path: 'dashboard', component: ProfileComponent},
      {
        path: 'posts', component: PostWrapperComponent, children: [
          {path: 'new', component: PostEditComponent},
          {path: ':id', component: PostDetailComponent},
          {path: '', component: PostTeaserListComponent}
        ]
      },
    ]
  },
  {path: 'auth', component: LoginComponent},
  {path: '', redirectTo: 'core/posts', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

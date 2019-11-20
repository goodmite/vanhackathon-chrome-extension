import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core/core.component';
import {PostTeaserComponent} from './core/posts/post-teaser/post-teaser.component';
import {PostDetailComponent} from './core/posts/post-detail/post-detail.component';
import {PostTeaserListComponent} from './core/posts/post-teaser-list/post-teaser-list.component';
import {PostEditComponent} from './core/posts/post-edit/post-edit.component';
import {ProfileComponent} from './core/user/profile/profile.component';
import {HeaderComponent} from './core/header/header.component';
import {
  NzAvatarModule, NzBreadCrumbModule,
  NzButtonModule,
  NzCardModule, NzCheckboxModule, NzDropDownModule,
  NzFormModule,
  NzIconModule, NzInputModule, NzLayoutModule, NzMenuModule,
  NzModalModule,
  NzPageHeaderModule, NzPopoverModule,
  NzTabsModule, NzTagModule, NzTypographyModule
} from 'ng-zorro-antd';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {SettingComponent} from './core/user/setting/setting.component';
import {PersonalInfoComponent} from './core/user/profile/personal-info/personal-info.component';
import {CredentialsComponent} from './core/user/profile/credentials/credentials.component';
import {EditorComponent} from '../editor/editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PostWrapperComponent} from './core/posts/post-wrapper/post-wrapper.component';
import {RouterModule} from '@angular/router';
import {JobTeaserComponent} from './core/jobs/job-teaser/job-teaser.component';
import {JobDetailComponent} from './core/jobs/job-detail/job-detail.component';
import {JobTeaserListComponent} from './core/jobs/job-teaser-list/job-teaser-list.component';
import {ProfileHeaderComponent} from './core/profile-header/profile-header.component';
import {JobTypeSelectComponent} from './core/jobs/job-type-select/job-type-select.component';
import {SideBarDetailComponent} from './core/side-bar-detail/side-bar-detail.component';
import {MyJobsComponent} from './core/jobs/my-jobs/my-jobs.component';
import {FooterComponent} from './core/footer/footer.component';
import {AllJobsComponent} from './core/jobs/all-jobs/all-jobs.component';
import {JobAppliedPipe} from './core/jobs/job-teaser/job-applied.pipe';
import {CalanderComponent} from './core/calender/calander/calander.component';
import {CalanderCellComponent} from './core/calender/calander-cell/calander-cell.component';
import {EventColorPipe} from './core/event-color.pipe';
import {EventMonthGridPipe} from './core/calender/calander/event-month-grid.pipe';
import {CellHighlightPipePipe} from './core/calender/calander/cell-highlight-pipe.pipe';
import { EventMarkedPipe } from './core/calender/calander-cell/event-accepted.pipe';
import {ClickOutsideModule} from 'ng-click-outside';
import { NotificationComponent } from './core/notification/notification.component';
import {HttpTrackerLibModule} from 'ngx-loadify';
import { NotificationFilerPipe } from './core/notification/notification-filer.pipe';


@NgModule({
  declarations: [
    CoreComponent,
    PostTeaserComponent,
    PostDetailComponent,
    PostTeaserListComponent,
    PostEditComponent,
    ProfileComponent,
    HeaderComponent,
    SettingComponent,
    PersonalInfoComponent,
    CredentialsComponent,
    EditorComponent,
    PostWrapperComponent,
    JobTeaserComponent,
    JobDetailComponent,
    JobTeaserListComponent,
    ProfileHeaderComponent,
    JobTypeSelectComponent,
    SideBarDetailComponent,
    MyJobsComponent,
    FooterComponent,
    AllJobsComponent,
    JobAppliedPipe,
    CalanderComponent,
    CalanderCellComponent,
    EventColorPipe,
    EventMonthGridPipe,
    CellHighlightPipePipe,
    EventMarkedPipe,
    NotificationComponent,
    NotificationFilerPipe
  ],

  exports: [
    CoreComponent, PostTeaserComponent, PostDetailComponent, PostTeaserListComponent, PostEditComponent, ProfileComponent, HeaderComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzAvatarModule,
    NzCardModule,
    NzIconModule,
    NzTabsModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzBadgeModule,
    NzTagModule,
    NzCheckboxModule,
    NzTypographyModule,
    NzPopoverModule,
    NgZorroAntdModule,
    ClickOutsideModule,
    HttpTrackerLibModule
  ]
})
export class CoreModule {
}

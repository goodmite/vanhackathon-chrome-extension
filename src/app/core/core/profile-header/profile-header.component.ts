import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EProfileTab} from '../../../typings/page';
import {IUser} from '../../../typings/auth';
import {SocketService} from '../../../socket.service';

@Component({
  selector: 'ngp-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  SocketService = SocketService;
  vanHackLogo = 'https://pbs.twimg.com/profile_images/1035234267603890176/MDWtjt3y_400x400.jpg';
  @Input() tab: EProfileTab = EProfileTab.allJobs;
  @Input() tabMap = null;
  @Input() user: IUser | undefined;
  @Output() logout$ = new EventEmitter();
  EProfileTab = EProfileTab;
  @Output() sidebarTabChanged$ = new EventEmitter<EProfileTab>();

  constructor() {
  }

  ngOnInit() {
  }

  navigateToNotificationPage() {
    this.sidebarTabChanged$.emit(EProfileTab.notifications);
    SocketService.count = 0;
  }

}

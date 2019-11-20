import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EProfileTab} from '../../typings/page';
import {IUser} from '../../typings/auth';
import {AuthStorageService} from '../../auth/auth.service';
import {HttpService} from '../../../../projects/http/src/lib/http.service';
import {UrlService} from '../../services/url.service';
import {IJob} from '../../typings/job';
import {IEvent} from '../../typings/event';
import {INotification} from '../../typings/notification';
import {SocketService} from '../../socket.service';

@Component({
  selector: 'ngp-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  isCollapsed = false;
  tabs = ['Applied (19)', 'In Process (2)', 'Rejected (2)'];
  @Output() filterJobs$ = new EventEmitter<any>();
  tabMap = {
    [EProfileTab.allJobs]: {title: 'Browse Jobs', icon: 'credit-card'},
    [EProfileTab.myJobs]: {title: 'My Jobs', icon: 'user'},
    [EProfileTab.events]: {title: 'Events', icon: 'calendar'},
    [EProfileTab.notifications]: {title: 'Notifications', icon: 'notification'},
    [EProfileTab.searchVanHack]: {title: 'Search VanHack', icon: 'search'},
    [EProfileTab.signOut]: {title: 'Sign out', icon: 'logout'},
  };
  selectedTab: EProfileTab = EProfileTab.allJobs;
  EProfileTab = EProfileTab;
  user: IUser = AuthStorageService.getUser();
  @Output() logout$ = new EventEmitter();
  jobs: IJob[] = [];
  notification: INotification[] = [];
  events: IEvent[] = [];
  isSpinning = true;

  constructor(private httpService: HttpService, private socketService: SocketService) {
  }

  ngOnInit() {
    this.loadJobs({});
    this.loadEvents();
    this.loadNotification();
    this.socketService.init(this.user._id);
  }

  querify(obj: object) {
    let str = '';
    for (var key in obj) {
      if (!obj[key]) {
        continue;
      }
      if (str != '') {
        str += '&';
      }
      str += key + '=' + obj[key];
    }
    return str;
  }

  loadJobs(query: object) {
    let queryStr = '';
    if (query) {
      queryStr = '?' + this.querify(query);
    }
    const jobsUrl = UrlService.getJobsUrl() + queryStr;
    this.httpService.makeGetReq<IJob[]>(jobsUrl)
      .subscribe((jobList: IJob[]) => {
        this.jobs = jobList;
      });
  }

  loadNotification() {
    let notificationUrl = UrlService.getNotificationsUrl(this.user._id, true);
    notificationUrl = notificationUrl + `?user_id=${this.user._id}`;
    this.httpService.makeGetReq<INotification[]>(notificationUrl)
      .subscribe((notifications: INotification[]) => {
        this.notification = notifications;
      });
  }

  loadEvents() {
    const eventUrl = UrlService.getEventsUrl();
    this.httpService.makeGetReq<IEvent[]>(eventUrl)
      .subscribe((eventList: IEvent[]) => {
        this.events = eventList.map((value: any) => {
          return {
            ...value,
            from: new Date(value.from),
            to: new Date(value.to)
          };
        });
      });
  }

  sidebarTabChangedHandler(tab: EProfileTab) {
    // this.isCollapsed = true;
    this.selectedTab = tab;
    if (this.selectedTab === EProfileTab.myJobs) {
      this.loadJobs({apply: this.user._id});
    } else if (this.selectedTab === EProfileTab.allJobs) {
      this.loadJobs({});
    } else if (this.selectedTab === EProfileTab.notifications) {
      this.loadNotification();
    }
  }

  applyForJobHandler({job, action}) {
    const jobsUrl = UrlService.getJobApplyUrl(job.id, action);
    const body = {id: this.user._id};

    this.httpService.makePostReq<IJob>(jobsUrl, body).subscribe((updatedJob: IJob) => {
      this.jobs = this.jobs.map((jobItem: IJob) => {
        if (jobItem.id === updatedJob.id) {
          return {
            ...job,
            ...updatedJob
          };
        }
        return jobItem;
      });
    });
  }

  filterJobsHandler(query) {
    this.loadJobs(query);
  }

  loadJobsHandler(action: string) {
    this.loadJobs({[action]: this.user._id});
  }

  markAsReadHandler(notification: INotification) {
    const url = UrlService.getNotificationsUrl(notification._id);
    this.httpService.makePostReq<INotification>(url, null).subscribe((updatedNotification: INotification) => {
      this.notification = this.notification.map((notification1: INotification) => {
        if (notification1._id === updatedNotification._id) {
          return {
            ...notification1,
            ...updatedNotification
          };
        }
        return notification1;
      });
    });
  }

}

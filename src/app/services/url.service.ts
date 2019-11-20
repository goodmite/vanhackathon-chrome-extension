import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  static BACKEND_ROOT = environment.backend_root + '/api/v1';

  constructor() {
  }

  static getSignUpUrl() {
    return UrlService.BACKEND_ROOT + '/auth/user';
  }

  static getJobsUrl(id?) {
    const idStr = id ? '/id' : '';
    return UrlService.BACKEND_ROOT + '/jobs' + idStr;
  }

  static getNotificationsUrl(user_id?: string, get?: boolean) {
    const str = (!get && user_id) ? `/${user_id}` : '';
    return UrlService.BACKEND_ROOT + '/notifications' + str;
  }

  static getEventsUrl() {
    return UrlService.BACKEND_ROOT + '/events';
  }

  static getMarkEventsUrl(id) {
    return UrlService.BACKEND_ROOT + '/events/' + id;
  }

  static getJobApplyUrl(id: number, action: string) {
    return UrlService.BACKEND_ROOT + `/jobs/apply/${id}?action=${action}`;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {EEventType, IEvent} from '../../../../typings/event';
// import {eventsModal} from './event-data';
import {UtilityService} from '../../utility.service';
import {UrlService} from '../../../../services/url.service';
import {HttpService} from '../../../../../../projects/http/src/lib/http.service';
import {AuthStorageService} from '../../../../auth/auth.service';

@Component({
  selector: 'ngp-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})
export class CalanderComponent implements OnInit {

  eventTypeArray = [EEventType.Webinar, EEventType.Leaps, EEventType.Missions, EEventType.VanHackathons];
  UtilityService = UtilityService;
  user = AuthStorageService.getUser();
  today = new Date();
  firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  constructor(
    private httpService: HttpService,
  ) {
  }

  EEventType = EEventType;
  @Input() events: IEvent[];

  hovered: IEvent | null = null;
  hoveredType: EEventType | null = null;

  ngOnInit() {
    console.log();
  }

  eventHighlighted(data: IEvent) {
    if (data) {
      const {type, ...highlightData} = data;
      this.hovered = highlightData;
      if (type) {
        this.hoveredType = type;
      }
    } else {
      this.hovered = null;
      this.hoveredType = null;
    }
  }

  highlightEvents(type: EEventType) {
    this.hovered = {type};
  }

  addAMonthToDate(days: number) {
    // this.firstDayOfMonth = new Date(this.firstDayOfMonth.getTime() + days * 30 * 24 * 3600 * 1000);
    const date = this.firstDayOfMonth;
    this.firstDayOfMonth = new Date(date.setMonth(date.getMonth() + days));
  }

  // @ts-ignore
  markEvent({event, accept}) {
    const index = this.events.findIndex(e => e._id === event._id);
    const url = UrlService.getMarkEventsUrl(event._id);
    const key = accept ? 'accepted' : 'rejected';
    this.httpService.makePostReq<IEvent>(url, {[key]: this.user && this.user._id})
      .subscribe((updatedEvent: IEvent) => {
        event[key] = [this.user._id];
        this.events[index] = {
          ...updatedEvent,
          from: event.from,
          to: event.to,
        };
        this.events = [...this.events];
      });
  }

}

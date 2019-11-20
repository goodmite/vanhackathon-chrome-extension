import {Pipe, PipeTransform} from '@angular/core';
import {EEventType} from '../../typings/event';

@Pipe({
  name: 'eventColor'
})
export class EventColorPipe implements PipeTransform {

  transform(value: any): any {
    if (value === EEventType.Leaps) {
      return '#f50';
    }
    if (value === EEventType.Missions) {
      return '#2db7f5';
    }
    if (value === EEventType.VanHackathons) {
      return '#87d068';
    }
    if (value === EEventType.Webinar) {
      return '#108ee9';
    }
  }

}

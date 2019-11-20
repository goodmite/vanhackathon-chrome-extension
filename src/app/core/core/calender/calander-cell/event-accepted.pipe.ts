import {Pipe, PipeTransform} from '@angular/core';
import {IEvent} from '../../../../typings/event';

@Pipe({
  name: 'eventMarked'
})
export class EventMarkedPipe implements PipeTransform {

  transform(event: IEvent, user_id: string): any {
    if (event.accepted && event.accepted.find(id => id === user_id)) {
      return 'accepted';
    }
    if (event.rejected && event.rejected.find(id => id === user_id)) {
      return 'rejected';
    }
  }

}

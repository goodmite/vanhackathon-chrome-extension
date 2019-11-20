import {Pipe, PipeTransform} from '@angular/core';
import {INotification} from '../../../typings/notification';

@Pipe({
  name: 'notificationFiler'
})
export class NotificationFilerPipe implements PipeTransform {

  transform(value: INotification[], read: boolean): any {
    return value.filter(item => item.read === read);
  }

}

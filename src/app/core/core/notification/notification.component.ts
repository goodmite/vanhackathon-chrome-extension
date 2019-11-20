import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INotification} from '../../../typings/notification';

@Component({
  selector: 'ngp-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  showRead = false;
  @Input() notification: INotification[];
  @Output() markAsRead$ = new EventEmitter<INotification>();
  constructor() { }

  ngOnInit() {
  }

}

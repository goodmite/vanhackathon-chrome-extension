import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICellData, IEvent} from '../../../../typings/event';
import {UtilityService} from '../../utility.service';
import {AuthStorageService} from '../../../../auth/auth.service';

@Component({
  selector: 'ngp-calander-cell',
  templateUrl: './calander-cell.component.html',
  styleUrls: ['./calander-cell.component.scss']
})
export class CalanderCellComponent implements OnInit {
  opened = false;
  today = new Date();
  user = AuthStorageService.getUser();
  UtilityService = UtilityService;
  _data: ICellData;

  @Input() set data(data: ICellData) {
    this._data = data;
  }

  @Input() highlightedEvent: IEvent;
  @Output() eventHovered$ = new EventEmitter<IEvent>();
  @Output() markEvent$ = new EventEmitter<{ event: IEvent, accept: boolean }>();

  constructor() {
  }

  ngOnInit() {
  }

  log(x) {
    this.opened = x;
    if (!x) {
      this.eventHovered$.emit(null);
    }
  }

  popoverHandler() {
    this.opened = !this.opened;
  }

  eventHovered: IEvent;

  eventHoveredHandler(event: IEvent) {
    this.eventHovered = event;
    this.eventHovered$.emit(event);
  }

  test(){
    this.eventHovered$.emit(null);
  }

}

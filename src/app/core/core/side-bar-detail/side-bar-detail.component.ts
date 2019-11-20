import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EProfileTab} from '../../../typings/page';

@Component({
  selector: 'ngp-side-bar-detail',
  templateUrl: './side-bar-detail.component.html',
  styleUrls: ['./side-bar-detail.component.scss']
})
export class SideBarDetailComponent implements OnInit {
  EProfileTab = EProfileTab;

  constructor() {
  }

  @Input() sideBarTab = EProfileTab.notifications;
  @Output() sidebarTabChanged$ = new EventEmitter<EProfileTab>();

  ngOnInit() {
  }

  log(x: any) {
    const $el = x.el as HTMLElement;
    const tabName = $el.getAttribute(`data-tab`) as EProfileTab;
    this.sidebarTabChanged$.emit(tabName);
  }

}

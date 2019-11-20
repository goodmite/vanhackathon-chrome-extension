import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IJob} from '../../../../typings/job';

@Component({
  selector: 'ngp-job-teaser-list',
  templateUrl: './job-teaser-list.component.html',
  styleUrls: ['./job-teaser-list.component.scss']
})
export class JobTeaserListComponent implements OnInit {
  @Input() jobs: IJob[] = [];
  @Input() expand = true;
  @Input() hideAdminControls : boolean;
  @Output() applyForJob = new EventEmitter<IJob>();
  constructor() { }

  ngOnInit() {
  }

}

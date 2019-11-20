import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IJob} from '../../../../typings/job';

@Component({
  selector: 'ngp-job-teaser',
  templateUrl: './job-teaser.component.html',
  styleUrls: ['./job-teaser.component.scss']
})
export class JobTeaserComponent implements OnInit {
  @Input() job: IJob;
  @Input() hideAdminControls : boolean;
  @Input() expand = true;
  @Output() applyForJob = new EventEmitter<{ job: IJob, action: string }>();
  expanded = false;
  constructor() {
  }

  ngOnInit() {
  }

}

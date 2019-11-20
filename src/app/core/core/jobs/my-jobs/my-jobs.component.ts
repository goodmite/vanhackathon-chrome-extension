import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IJob} from '../../../../typings/job';

@Component({
  selector: 'ngp-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss']
})
export class MyJobsComponent implements OnInit {
  tabs = ['Applied', 'In Process', 'Hired', 'Rejected'];
  index = 0;
  @Input() jobs: IJob[] = [];
  @Input() expand = true;
  @Output() loadJobs = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  loadJobsHandler(index: number) {
    if (index === 0) {
      this.loadJobs.emit('apply');
    }
    if (index === 1) {
      this.loadJobs.emit('interview');
    }
    if (index === 2) {
      this.loadJobs.emit('hire');
    }
    if (index === 3) {
      this.loadJobs.emit('reject');
    }
  }

}

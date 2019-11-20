import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {IJob} from '../../../../typings/job';

@Component({
  selector: 'ngp-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.scss']
})
export class AllJobsComponent implements OnInit {
  isVisible = false;
  countries = ['Canada', 'Yemen', 'Germany'];
  filterForm: any = null;
  @Output() applyForJob$ = new EventEmitter<IJob>();
  @Output() filterJobs$ = new EventEmitter<any>();
  @Input() jobs: IJob[] = [];
  badgeCount = 0;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const locationFCs = this.countries.map(_ => this.formBuilder.control(false));
    this.filterForm = this.formBuilder.group({
      remote: [],
      vanhackteam: [],
      country: this.formBuilder.array(locationFCs),
      experience: [],
    });

  }

  handleFilterModelSubmit() {

    const query = {...this.filterForm.value};
    this.badgeCount = query.country.reduce((total, current) => {
      if (current) {
        return ++total;
      }
      return total;
    }, 0);
    query.country = query.country.map((isSelected: any, index: number) => {
      if (isSelected) {
        return this.countries[index];
      } else {
        return '';
      }
    }).filter(country => country);
    delete query.countries;
    if (query.country.length === 0) {
      delete query.country;
    }
    this.filterJobs$.emit(query);
    this.isVisible = false;
  }


  showFilterFormHandler() {
    this.isVisible = !this.isVisible;
  }

  cancel() {
    this.isVisible = false;
  }
}

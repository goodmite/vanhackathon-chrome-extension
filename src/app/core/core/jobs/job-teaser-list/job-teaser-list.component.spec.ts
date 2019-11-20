import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTeaserListComponent } from './job-teaser-list.component';

describe('JobTeaserListComponent', () => {
  let component: JobTeaserListComponent;
  let fixture: ComponentFixture<JobTeaserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTeaserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTeaserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

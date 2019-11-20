import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTeaserComponent } from './job-teaser.component';

describe('JobTeaserComponent', () => {
  let component: JobTeaserComponent;
  let fixture: ComponentFixture<JobTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

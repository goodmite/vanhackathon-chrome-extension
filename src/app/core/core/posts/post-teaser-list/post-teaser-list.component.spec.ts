import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTeaserListComponent } from './post-teaser-list.component';

describe('PostTeaserListComponent', () => {
  let component: PostTeaserListComponent;
  let fixture: ComponentFixture<PostTeaserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTeaserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTeaserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTeaserComponent } from './post-teaser.component';

describe('PostTeaserComponent', () => {
  let component: PostTeaserComponent;
  let fixture: ComponentFixture<PostTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

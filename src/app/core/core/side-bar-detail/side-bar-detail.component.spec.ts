import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDetailComponent } from './side-bar-detail.component';

describe('SideBarDetailComponent', () => {
  let component: SideBarDetailComponent;
  let fixture: ComponentFixture<SideBarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

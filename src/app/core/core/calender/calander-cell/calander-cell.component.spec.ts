import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalanderCellComponent } from './calander-cell.component';

describe('CalanderCellComponent', () => {
  let component: CalanderCellComponent;
  let fixture: ComponentFixture<CalanderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalanderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalanderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

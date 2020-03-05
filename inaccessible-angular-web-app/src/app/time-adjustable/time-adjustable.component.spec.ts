import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAdjustableComponent } from './time-adjustable.component';

describe('TimeAdjustableComponent', () => {
  let component: TimeAdjustableComponent;
  let fixture: ComponentFixture<TimeAdjustableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAdjustableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAdjustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

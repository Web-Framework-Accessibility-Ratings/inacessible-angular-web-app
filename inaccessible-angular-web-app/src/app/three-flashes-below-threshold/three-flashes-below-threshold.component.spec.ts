import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFlashesBelowThresholdComponent } from './three-flashes-below-threshold.component';

describe('ThreeFlashesBelowThresholdComponent', () => {
  let component: ThreeFlashesBelowThresholdComponent;
  let fixture: ComponentFixture<ThreeFlashesBelowThresholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeFlashesBelowThresholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeFlashesBelowThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

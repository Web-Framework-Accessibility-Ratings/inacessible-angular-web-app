import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningfulSequenceComponent } from './meaningful-sequence.component';

describe('MeaningfulSequenceComponent', () => {
  let component: MeaningfulSequenceComponent;
  let fixture: ComponentFixture<MeaningfulSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaningfulSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaningfulSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

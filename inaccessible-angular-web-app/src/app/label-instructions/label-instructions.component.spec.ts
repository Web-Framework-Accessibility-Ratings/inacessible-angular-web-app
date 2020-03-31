import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInstructionsComponent } from './label-instructions.component';

describe('LabelInstructionsComponent', () => {
  let component: LabelInstructionsComponent;
  let fixture: ComponentFixture<LabelInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

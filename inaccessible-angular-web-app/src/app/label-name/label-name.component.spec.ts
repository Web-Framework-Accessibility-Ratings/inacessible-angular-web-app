import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNameComponent } from './label-name.component';

describe('LabelNameComponent', () => {
  let component: LabelNameComponent;
  let fixture: ComponentFixture<LabelNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

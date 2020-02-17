import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPurposeComponent } from './input-purpose.component';

describe('InputPurposeComponent', () => {
  let component: InputPurposeComponent;
  let fixture: ComponentFixture<InputPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

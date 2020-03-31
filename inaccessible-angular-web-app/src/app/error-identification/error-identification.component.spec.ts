import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorIdentificationComponent } from './error-identification.component';

describe('ErrorIdentificationComponent', () => {
  let component: ErrorIdentificationComponent;
  let fixture: ComponentFixture<ErrorIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

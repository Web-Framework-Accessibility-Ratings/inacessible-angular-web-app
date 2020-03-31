import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsistentIdentificationComponent } from './consistent-identification.component';

describe('ConsistentIdentificationComponent', () => {
  let component: ConsistentIdentificationComponent;
  let fixture: ComponentFixture<ConsistentIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsistentIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsistentIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

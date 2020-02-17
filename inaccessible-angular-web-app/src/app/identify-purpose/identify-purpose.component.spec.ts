import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyPurposeComponent } from './identify-purpose.component';

describe('IdentifyPurposeComponent', () => {
  let component: IdentifyPurposeComponent;
  let fixture: ComponentFixture<IdentifyPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

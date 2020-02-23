import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOfColorComponent } from './use-of-color.component';

describe('UseOfColorComponent', () => {
  let component: UseOfColorComponent;
  let fixture: ComponentFixture<UseOfColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseOfColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseOfColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTextContrastComponent } from './non-text-contrast.component';

describe('NonTextContrastComponent', () => {
  let component: NonTextContrastComponent;
  let fixture: ComponentFixture<NonTextContrastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonTextContrastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonTextContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

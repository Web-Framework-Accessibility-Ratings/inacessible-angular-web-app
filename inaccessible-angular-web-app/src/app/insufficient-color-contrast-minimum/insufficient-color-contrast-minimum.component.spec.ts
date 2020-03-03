import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsufficientColorContrastMinimumComponent } from './insufficient-color-contrast-minimum.component';

describe('InsufficientColorContrastMinimumComponent', () => {
  let component: InsufficientColorContrastMinimumComponent;
  let fixture: ComponentFixture<InsufficientColorContrastMinimumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsufficientColorContrastMinimumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsufficientColorContrastMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

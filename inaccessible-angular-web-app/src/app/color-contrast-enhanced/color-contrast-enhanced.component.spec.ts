import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorContrastEnhancedComponent } from './color-contrast-enhanced.component';

describe('ColorContrastEnhancedComponent', () => {
  let component: ColorContrastEnhancedComponent;
  let fixture: ComponentFixture<ColorContrastEnhancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorContrastEnhancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorContrastEnhancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

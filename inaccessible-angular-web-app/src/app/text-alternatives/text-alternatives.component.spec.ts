import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlternativesComponent } from './text-alternatives.component';

describe('TextAlternativesComponent', () => {
  let component: TextAlternativesComponent;
  let fixture: ComponentFixture<TextAlternativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAlternativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlternativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

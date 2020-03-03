import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPresentationComponent } from './visual-presentation.component';

describe('VisualPresentationComponent', () => {
  let component: VisualPresentationComponent;
  let fixture: ComponentFixture<VisualPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

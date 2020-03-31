import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusOrderComponent } from './focus-order.component';

describe('FocusOrderComponent', () => {
  let component: FocusOrderComponent;
  let fixture: ComponentFixture<FocusOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

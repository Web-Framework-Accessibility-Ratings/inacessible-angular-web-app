import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardTrapComponent } from './keyboard-trap.component';

describe('KeyboardTrapComponent', () => {
  let component: KeyboardTrapComponent;
  let fixture: ComponentFixture<KeyboardTrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardTrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

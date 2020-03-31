import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsistentNavigationComponent } from './consistent-navigation.component';

describe('ConsistentNavigationComponent', () => {
  let component: ConsistentNavigationComponent;
  let fixture: ComponentFixture<ConsistentNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsistentNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsistentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

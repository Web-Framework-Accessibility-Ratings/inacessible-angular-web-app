import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseStopHideComponent } from './pause-stop-hide.component';

describe('PauseStopHideComponent', () => {
  let component: PauseStopHideComponent;
  let fixture: ComponentFixture<PauseStopHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PauseStopHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseStopHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

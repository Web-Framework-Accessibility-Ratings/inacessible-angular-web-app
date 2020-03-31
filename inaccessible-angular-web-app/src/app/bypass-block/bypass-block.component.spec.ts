import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BypassBlockComponent } from './bypass-block.component';

describe('BypassBlockComponent', () => {
  let component: BypassBlockComponent;
  let fixture: ComponentFixture<BypassBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BypassBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BypassBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingsLabelsComponent } from './headings-labels.component';

describe('HeadingsLabelsComponent', () => {
  let component: HeadingsLabelsComponent;
  let fixture: ComponentFixture<HeadingsLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingsLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingsLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

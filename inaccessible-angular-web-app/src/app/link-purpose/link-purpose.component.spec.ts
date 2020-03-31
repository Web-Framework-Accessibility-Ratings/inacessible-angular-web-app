import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPurposeComponent } from './link-purpose.component';

describe('LinkPurposeComponent', () => {
  let component: LinkPurposeComponent;
  let fixture: ComponentFixture<LinkPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

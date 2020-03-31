import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLangComponent } from './part-lang.component';

describe('PartLangComponent', () => {
  let component: PartLangComponent;
  let fixture: ComponentFixture<PartLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

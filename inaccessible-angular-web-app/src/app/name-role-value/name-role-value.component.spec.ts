import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameRoleValueComponent } from './name-role-value.component';

describe('NameRoleValueComponent', () => {
  let component: NameRoleValueComponent;
  let fixture: ComponentFixture<NameRoleValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameRoleValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameRoleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

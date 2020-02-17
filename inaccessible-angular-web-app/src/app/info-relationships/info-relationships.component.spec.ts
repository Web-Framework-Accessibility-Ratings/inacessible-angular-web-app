import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRelationshipsComponent } from './info-relationships.component';

describe('InfoRelationshipsComponent', () => {
  let component: InfoRelationshipsComponent;
  let fixture: ComponentFixture<InfoRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

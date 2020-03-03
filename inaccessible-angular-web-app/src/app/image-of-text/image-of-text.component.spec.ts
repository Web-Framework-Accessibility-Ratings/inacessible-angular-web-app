import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfTextComponent } from './image-of-text.component';

describe('ImageOfTextComponent', () => {
  let component: ImageOfTextComponent;
  let fixture: ComponentFixture<ImageOfTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageOfTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOfTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

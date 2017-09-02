import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchDragToLoadComponent } from './touch-drag-to-load.component';

describe('TouchDragToLoadComponent', () => {
  let component: TouchDragToLoadComponent;
  let fixture: ComponentFixture<TouchDragToLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchDragToLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchDragToLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

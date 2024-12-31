import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWithIdComponent } from './display-with-id.component';

describe('DisplayWithIdComponent', () => {
  let component: DisplayWithIdComponent;
  let fixture: ComponentFixture<DisplayWithIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayWithIdComponent]
    });
    fixture = TestBed.createComponent(DisplayWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

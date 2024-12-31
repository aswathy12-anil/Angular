import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAlldetailsComponent } from './display-alldetails.component';

describe('DisplayAlldetailsComponent', () => {
  let component: DisplayAlldetailsComponent;
  let fixture: ComponentFixture<DisplayAlldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAlldetailsComponent]
    });
    fixture = TestBed.createComponent(DisplayAlldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

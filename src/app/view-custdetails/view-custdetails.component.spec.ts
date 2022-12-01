import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustdetailsComponent } from './view-custdetails.component';

describe('ViewCustdetailsComponent', () => {
  let component: ViewCustdetailsComponent;
  let fixture: ComponentFixture<ViewCustdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

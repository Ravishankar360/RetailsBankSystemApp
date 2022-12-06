import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransactioncustomerComponent } from './viewtransactioncustomer.component';

describe('ViewtransactioncustomerComponent', () => {
  let component: ViewtransactioncustomerComponent;
  let fixture: ComponentFixture<ViewtransactioncustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtransactioncustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransactioncustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWithDrawnComponent } from './customer-with-drawn.component';

describe('CustomerWithDrawnComponent', () => {
  let component: CustomerWithDrawnComponent;
  let fixture: ComponentFixture<CustomerWithDrawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWithDrawnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWithDrawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

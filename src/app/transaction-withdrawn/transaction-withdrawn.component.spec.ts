import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionWithdrawnComponent } from './transaction-withdrawn.component';

describe('TransactionWithdrawnComponent', () => {
  let component: TransactionWithdrawnComponent;
  let fixture: ComponentFixture<TransactionWithdrawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionWithdrawnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionWithdrawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

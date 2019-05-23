import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkipperPaymentComponent } from './dashboard-skipper-payment.component';

describe('DashboardSkipperPaymentComponent', () => {
  let component: DashboardSkipperPaymentComponent;
  let fixture: ComponentFixture<DashboardSkipperPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSkipperPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSkipperPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

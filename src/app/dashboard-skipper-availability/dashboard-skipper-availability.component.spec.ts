import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkipperAvailabilityComponent } from './dashboard-skipper-availability.component';

describe('DashboardSkipperAvailabilityComponent', () => {
  let component: DashboardSkipperAvailabilityComponent;
  let fixture: ComponentFixture<DashboardSkipperAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSkipperAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSkipperAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

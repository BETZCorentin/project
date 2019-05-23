import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkipperOpportunitiesComponent } from './dashboard-skipper-opportunities.component';

describe('DashboardSkipperOpportunitiesComponent', () => {
  let component: DashboardSkipperOpportunitiesComponent;
  let fixture: ComponentFixture<DashboardSkipperOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSkipperOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSkipperOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

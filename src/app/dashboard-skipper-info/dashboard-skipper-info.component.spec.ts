import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkipperInfoComponent } from './dashboard-skipper-info.component';

describe('DashboardSkipperInfoComponent', () => {
  let component: DashboardSkipperInfoComponent;
  let fixture: ComponentFixture<DashboardSkipperInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSkipperInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSkipperInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

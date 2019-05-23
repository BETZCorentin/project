import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkipperComponent } from './dashboard-skipper.component';

describe('DashboardSkipperComponent', () => {
  let component: DashboardSkipperComponent;
  let fixture: ComponentFixture<DashboardSkipperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSkipperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSkipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

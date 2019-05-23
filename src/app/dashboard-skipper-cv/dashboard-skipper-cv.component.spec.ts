import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkipperCvComponent } from './dashboard-skipper-cv.component';

describe('DashboardSkipperCvComponent', () => {
  let component: DashboardSkipperCvComponent;
  let fixture: ComponentFixture<DashboardSkipperCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSkipperCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSkipperCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

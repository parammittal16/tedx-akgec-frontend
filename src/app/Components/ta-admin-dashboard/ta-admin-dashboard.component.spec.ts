import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaAdminDashboardComponent } from './ta-admin-dashboard.component';

describe('TaAdminDashboardComponent', () => {
  let component: TaAdminDashboardComponent;
  let fixture: ComponentFixture<TaAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

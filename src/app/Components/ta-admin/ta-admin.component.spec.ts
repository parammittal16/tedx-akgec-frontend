import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaAdminComponent } from './ta-admin.component';

describe('TaAdminComponent', () => {
  let component: TaAdminComponent;
  let fixture: ComponentFixture<TaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

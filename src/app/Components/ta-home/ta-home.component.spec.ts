import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaHomeComponent } from './ta-home.component';

describe('TaHomeComponent', () => {
  let component: TaHomeComponent;
  let fixture: ComponentFixture<TaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

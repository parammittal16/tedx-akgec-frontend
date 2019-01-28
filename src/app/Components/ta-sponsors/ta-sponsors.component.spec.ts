import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaSponsorsComponent } from './ta-sponsors.component';

describe('TaSponsorsComponent', () => {
  let component: TaSponsorsComponent;
  let fixture: ComponentFixture<TaSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

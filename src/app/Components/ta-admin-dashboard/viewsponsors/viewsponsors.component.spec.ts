import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsponsorsComponent } from './viewsponsors.component';

describe('ViewsponsorsComponent', () => {
  let component: ViewsponsorsComponent;
  let fixture: ComponentFixture<ViewsponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

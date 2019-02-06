import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspeakersComponent } from './viewspeakers.component';

describe('ViewspeakersComponent', () => {
  let component: ViewspeakersComponent;
  let fixture: ComponentFixture<ViewspeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

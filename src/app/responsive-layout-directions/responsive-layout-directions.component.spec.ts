import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveLayoutDirectionsComponent } from './responsive-layout-directions.component';

describe('ResponsiveLayoutDirectionsComponent', () => {
  let component: ResponsiveLayoutDirectionsComponent;
  let fixture: ComponentFixture<ResponsiveLayoutDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveLayoutDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveLayoutDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

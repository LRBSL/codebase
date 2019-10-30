import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRegistrationComponent } from './land-registration.component';

describe('LandRegistrationComponent', () => {
  let component: LandRegistrationComponent;
  let fixture: ComponentFixture<LandRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFacilitiesComponent } from './support-facilities.component';

describe('SupportFacilitiesComponent', () => {
  let component: SupportFacilitiesComponent;
  let fixture: ComponentFixture<SupportFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

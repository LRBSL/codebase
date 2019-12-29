import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNotariesSurveyorsComponent } from './search-notaries-surveyors.component';

describe('SearchNotariesSurveyorsComponent', () => {
  let component: SearchNotariesSurveyorsComponent;
  let fixture: ComponentFixture<SearchNotariesSurveyorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNotariesSurveyorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNotariesSurveyorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

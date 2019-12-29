import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLandRecordsComponent } from './search-land-records.component';

describe('SearchLandRecordsComponent', () => {
  let component: SearchLandRecordsComponent;
  let fixture: ComponentFixture<SearchLandRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLandRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLandRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

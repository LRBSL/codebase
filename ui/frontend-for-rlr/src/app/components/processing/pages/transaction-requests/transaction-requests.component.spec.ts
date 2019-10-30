import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRequestsComponent } from './transaction-requests.component';

describe('LandRecordsComponent', () => {
  let component: TransactionRequestsComponent;
  let fixture: ComponentFixture<TransactionRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

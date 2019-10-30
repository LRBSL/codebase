import { TestBed } from '@angular/core/testing';

import { LandRegistrationService } from './land-registration.service';

describe('LandRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandRegistrationService = TestBed.get(LandRegistrationService);
    expect(service).toBeTruthy();
  });
});

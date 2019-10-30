import { TestBed } from '@angular/core/testing';

import { HttpRequestResolverService } from './http-request-resolver.service';

describe('HttpRequestResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpRequestResolverService = TestBed.get(HttpRequestResolverService);
    expect(service).toBeTruthy();
  });
});

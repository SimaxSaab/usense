import { TestBed } from '@angular/core/testing';

import { PassCheckComplexServiceService } from './pass-check-complex-service.service';

describe('PassCheckComplexServiceService', () => {
  let service: PassCheckComplexServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassCheckComplexServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

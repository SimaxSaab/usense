import { TestBed } from '@angular/core/testing';

import { InputPassValueServiceService } from './input-pass-value-service.service';

describe('InputPassValueServiceService', () => {
  let service: InputPassValueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputPassValueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

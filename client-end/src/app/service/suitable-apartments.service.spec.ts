import { TestBed } from '@angular/core/testing';

import { SuitableApartmentsService } from './suitable-apartments.service';

describe('SuitableApartmentsService', () => {
  let service: SuitableApartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuitableApartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

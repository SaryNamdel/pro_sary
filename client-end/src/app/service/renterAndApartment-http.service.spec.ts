import { TestBed } from '@angular/core/testing';

import { RenterAndApartmentHttpService } from './renterAndApartment-http.service';
import { RenterAndApartment } from '../models/RenterAndApartment';

describe('ApartmentHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenterAndApartment = TestBed.get(RenterAndApartmentHttpService);
    expect(service).toBeTruthy();
  });
});

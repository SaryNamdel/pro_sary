import { TestBed } from '@angular/core/testing';

import { CusromerAndApartmentHttpService, CustomerAndApartment } from './customerAndApartment-http.service';

describe('ApartmentHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerAndApartment = TestBed.get(CusromerAndApartmentHttpService);
    expect(service).toBeTruthy();
  });
});

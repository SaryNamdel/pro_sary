import { TestBed } from '@angular/core/testing';

import { ApartmentHttpService } from './apartment-http.service';

describe('ApartmentHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApartmentHttpService = TestBed.get(ApartmentHttpService);
    expect(service).toBeTruthy();
  });
});

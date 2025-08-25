import { TestBed } from '@angular/core/testing';

import { CitiesHttpService } from './cities-http.service';

describe('citiesHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesHttpService = TestBed.get(CitiesHttpService);
    expect(service).toBeTruthy();
  });
});

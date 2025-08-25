import { TestBed } from '@angular/core/testing';

import { RentersHttpService } from './renters-http.service';

describe('RentersHttpService', () => {
  let service: RentersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

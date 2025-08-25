import { TestBed } from '@angular/core/testing';

import { TryHttpService } from './try-http.service';

describe('TryHttpService', () => {
  let service: TryHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

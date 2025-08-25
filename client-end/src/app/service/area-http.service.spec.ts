import { TestBed } from '@angular/core/testing';

import { AreaHttpService } from './area-http.service';

describe('areatHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaHttpService = TestBed.get(AreaHttpService);
    expect(service).toBeTruthy();
  });
});

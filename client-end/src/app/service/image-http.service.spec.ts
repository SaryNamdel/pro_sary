import { TestBed } from '@angular/core/testing';

import { ImageHttpService } from './image-http.service';

describe('ImageHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageHttpService = TestBed.get(ImageHttpService);
    expect(service).toBeTruthy();
  });
});

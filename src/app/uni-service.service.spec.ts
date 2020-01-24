import { TestBed } from '@angular/core/testing';

import { UniServiceService } from './uni-service.service';

describe('UniServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniServiceService = TestBed.get(UniServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { NavHeaderService } from './nav-header.service';

describe('NavHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavHeaderService]
    });
  });

  it('should be created', inject([NavHeaderService], (service: NavHeaderService) => {
    expect(service).toBeTruthy();
  }));
});

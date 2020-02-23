import { TestBed } from '@angular/core/testing';

import { FilterexpenseService } from './filterexpense.service';

describe('FilterexpenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterexpenseService = TestBed.get(FilterexpenseService);
    expect(service).toBeTruthy();
  });
});

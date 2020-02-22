import { TestBed } from '@angular/core/testing';

import { ViewExpenseService } from './view-expense.service';

describe('ViewExpenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewExpenseService = TestBed.get(ViewExpenseService);
    expect(service).toBeTruthy();
  });
});

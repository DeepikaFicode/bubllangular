import { TestBed } from '@angular/core/testing';

import { CompanyInterfaceService } from './company-interface.service';

describe('CompanyInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyInterfaceService = TestBed.get(CompanyInterfaceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth.guard';

describe('Auth.GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});

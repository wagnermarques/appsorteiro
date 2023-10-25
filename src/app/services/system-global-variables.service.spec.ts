import { TestBed } from '@angular/core/testing';

import { SystemGlobalVariablesService } from './system-global-variables.service';

describe('SystemGlobalVariablesService', () => {
  let service: SystemGlobalVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemGlobalVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

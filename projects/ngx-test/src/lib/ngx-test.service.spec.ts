import { TestBed } from '@angular/core/testing';

import { NgxTestService } from './ngx-test.service';

describe('NgxTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTestService = TestBed.get(NgxTestService);
    expect(service).toBeTruthy();
  });
});

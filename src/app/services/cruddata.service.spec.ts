import { TestBed } from '@angular/core/testing';

import { CRUDdataService } from './cruddata.service';

describe('CRUDdataService', () => {
  let service: CRUDdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShowHideButtonServiceService } from './services/show-hide-button-service.service';

describe('ShowHideButtonServiceService', () => {
  let service: ShowHideButtonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHideButtonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

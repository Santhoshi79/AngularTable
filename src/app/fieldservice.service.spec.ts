import { TestBed } from '@angular/core/testing';

import { FieldserviceService } from './fieldservice.service';

describe('FieldserviceService', () => {
  let service: FieldserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShoesTypeService } from './shoes-type.service';

describe('ShoesTypeService', () => {
  let service: ShoesTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

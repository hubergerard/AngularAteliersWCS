import { TestBed } from '@angular/core/testing';

import { KittenService } from './kitten.service';

describe('KittenService', () => {
  let service: KittenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KittenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ItemsApiService } from './items-api.service';

describe('ItemsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsApiService = TestBed.get(ItemsApiService);
    expect(service).toBeTruthy();
  });
});

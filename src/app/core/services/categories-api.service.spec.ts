import { Category } from './../../core/models/category';
import { TestBed } from '@angular/core/testing';

import { CategoriesApiService } from './categories-api.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('CategoriesApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: CategoriesApiService;
  const API_URL = 'https://5cfa67ebf26e8c00146d0756.mockapi.io';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesApiService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CategoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returned Observable should match the right data', () => {
    const mockCategory = [
      new Category({
        id: '1',
        name: 'Category 1'
      }),
      new Category({
        id: '2',
        name: 'Category 2'
      }),
      new Category({
        id: '3',
        name: 'Category 3'
      })];

    service.all()
      .subscribe(response => {
        expect(response).toEqual(mockCategory);
      });

    const req = httpTestingController.expectOne(API_URL + '/categories');
    expect(req.request.method).toEqual('GET');

    req.flush(mockCategory);
  });

  it('created a category', () => {
    const mockCategory = new Category({
        id: '1',
        name: 'Category 1'
      });

    const toCreate = new Category({
      name: 'Category 1'
    });

    service.post(toCreate)
      .subscribe(response => {
        expect(response).toEqual(mockCategory);
      });

    const req = httpTestingController.expectOne(API_URL + '/categories');
    expect(req.request.method).toEqual('POST');

    req.flush(mockCategory);
  });
});

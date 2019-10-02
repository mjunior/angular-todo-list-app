import { Item } from './../models/item';
// tslint:disable:ban-types
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const API_URL = 'https://5cfa67ebf26e8c00146d0756.mockapi.io/categories/';

@Injectable()
export class ItemsApiService {

  constructor(private http: HttpClient) { }

  all(categoryId: number, listId: number): Observable<Item[]> {
    if (categoryId && listId) {
      const url = API_URL + categoryId + '/lists/' + listId + '/items';
      return this.http.get<Item[]>(url);
    } else {
      throw new Error('IdsMustBePresent');
    }
  }

  post(categoryId: number, listId: number, item: Item): Observable<Item> {
    if (categoryId && listId) {
      const url = API_URL + categoryId + '/lists/' + listId + '/items';
      return this.http.post<Item>(url, item);
    } else {
      throw new Error('IdsMustBePresent');
    }
  }
}

import { List } from './../models/list';
// tslint:disable:ban-types
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://5cfa67ebf26e8c00146d0756.mockapi.io/categories/';

@Injectable()
export class ListsApiService {

  constructor(private http: HttpClient) { }

  all(categoryId: number): Observable<List[]> {
    return this.http.get<List[]>(API_URL + categoryId + '/lists');
  }

  get(categoryId: number, id: number): Observable<List> {
    return this.http.get<List>(API_URL + categoryId + '/lists/' + id);
  }

  post(categoryId: number, list: List): Observable<List> {
    if (categoryId) {
      const url = API_URL + categoryId + '/lists';
      return this.http.post<List>(url, list);
    } else {
      throw new Error('IdsMustBePresent');
    }
  }
}

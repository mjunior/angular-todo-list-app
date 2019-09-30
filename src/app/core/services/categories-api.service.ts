import { CoreModule } from './../core.module';
import { Category } from './../../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://5cfa67ebf26e8c00146d0756.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http: HttpClient) { }

  all(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  get(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + '/categories/' + id);
  }
}

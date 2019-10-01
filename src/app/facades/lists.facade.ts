import { CategoriesApiService } from './../core/services/categories-api.service';
import { Category } from './../core/models/category';
import { ItemsApiService } from './../core/services/items-api.service';
import { Item } from './../core/models/item';
import { ListsApiService } from './../core/services/lists-api.service';
import { List } from './../core/models/list';
// tslint:disable:ban-types
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable()
export class ListsFacade {

  constructor(private lisApiService: ListsApiService,
              private itemsApiService: ItemsApiService,
              private categoriesApiService: CategoriesApiService) { }

  allLists(categoryId: number): Observable<List[]> {
    return this.lisApiService.all(categoryId)
                  .pipe(map(response => response));
  }

  getList(categoryId: number, id: number): Observable<List> {
    return this.lisApiService.get(categoryId, id)
                  .pipe(map(response => response));
  }

  allItems(categoryId: number, id: number): Observable<Item[]> {
    return this.itemsApiService.all(categoryId, id)
      .pipe(map(response => response));
  }

  postCategory(category: Category): Observable<Category> {
    return this.categoriesApiService.post(category)
      .pipe(map(response => response));
  }
}

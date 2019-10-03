import { List } from './../models/list';
import { Item } from './../models/item';
import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private categorySource = new BehaviorSubject(new Category());
  private itemSource = new BehaviorSubject(new Item());
  private listSource = new BehaviorSubject(new List());

  categoryCreatedEvent = this.categorySource.asObservable();
  itemCreatedEvent = this.itemSource.asObservable();
  listCreatedEvent = this.listSource.asObservable();

  constructor() { }

  categoryCreated(category: Category) {
    this.categorySource.next(category);
  }

  itemCreated(item: Item) {
    this.itemSource.next(item);
  }

  listCreated(list: List) {
    this.listSource.next(list);
  }

}

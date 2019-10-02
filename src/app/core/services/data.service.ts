import { Item } from './../models/item';
import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private categorySource = new BehaviorSubject(new Category());
  private itemSource = new BehaviorSubject(new Item());
  categoryCreatedEvent = this.categorySource.asObservable();
  itemCreatedEvent = this.itemSource.asObservable();

  constructor() { }

  categoryCreated(category: Category) {
    this.categorySource.next(category);
  }

  itemCreated(item: Item) {
    console.log('dataservice item criado');
    this.itemSource.next(item);
  }

}

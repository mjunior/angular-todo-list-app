import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private categorySource = new BehaviorSubject(new Category());
  categoryCreatedEvent = this.categorySource.asObservable();

  constructor() { }

  categoryCreated(category: Category) {
    this.categorySource.next(category);
  }

}

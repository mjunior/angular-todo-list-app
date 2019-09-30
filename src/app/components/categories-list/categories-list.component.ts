import { Category } from './../../models/category';
import { CategoriesApiService } from './../../services/categories-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private service: CategoriesApiService) { }

  ngOnInit() {
    this.service.all()
      .subscribe(data => this.categories = data );
  }

}

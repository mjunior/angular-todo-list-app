import { CategoriesApiService } from './../../../core/services/categories-api.service';
import { Category } from './../../../core/models/category';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];

  @Input() private sidenavRef: MatSidenav;

  constructor(private service: CategoriesApiService) { }

  ngOnInit() {
    this.service.all()
      .subscribe(data => this.categories = data );
  }

}

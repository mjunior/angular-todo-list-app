import { Category } from './../../../core/models/category';
import { CategoriesApiService } from './../../../core/services/categories-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})

export class CategoryDetailComponent implements OnInit {
  category: Category = new Category();

  constructor(private service: CategoriesApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const categoryId = this.route.snapshot.params.id;
    this.service.get(categoryId)
      .subscribe((data) => this.category = data);
  }
}

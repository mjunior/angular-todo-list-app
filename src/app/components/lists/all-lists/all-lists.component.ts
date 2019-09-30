import { ActivatedRoute } from '@angular/router';
import { ListsApiService } from './../../../core/services/lists-api.service';
import { List } from './../../../core/models/list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss']
})
export class AllListsComponent implements OnInit {

  lists: List[] = [];
  categoryId: number;

  constructor(private listService: ListsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.categoryId = routeParams.categoryId;
      this.listService.all(this.categoryId)
        .subscribe((response) => this.lists = response);
    });
  }
}

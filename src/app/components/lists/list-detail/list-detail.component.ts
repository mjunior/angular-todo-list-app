import { Item } from './../../../core/models/item';
import { ActivatedRoute } from '@angular/router';
import { ListsFacade } from './../../../facades/lists.facade';
import { ListsApiService } from './../../../core/services/lists-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  items: Item[] = [];
  categoryId: number;
  id: number;

  constructor(private listsFacade: ListsFacade, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.categoryId = routeParams.categoryId;
      this.id = routeParams.id;
      this.listsFacade.allItems(this.categoryId, this.id)
        .subscribe(response => this.items = response);
    });
  }

  checked(item: Item) {
    console.log('Checked');
  }

}

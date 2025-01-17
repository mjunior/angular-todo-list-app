import { DataService } from './../../../core/services/data.service';
import { ItemModalComponent } from './../item-modal/item-modal.component';
import { Item } from './../../../core/models/item';
import { ActivatedRoute } from '@angular/router';
import { ListsFacade } from './../../../facades/lists.facade';
import { ListsApiService } from './../../../core/services/lists-api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  items: Item[] = [];
  categoryId: number;
  id: number;
  listName: string;

  constructor(private listsFacade: ListsFacade,
              private route: ActivatedRoute,
              private data: DataService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.listName = history.state.listName;

    this.route.params.subscribe(routeParams => {
      this.categoryId = routeParams.categoryId;
      this.id = routeParams.id;
      this.loadItems();
    });

    if (this.id && this.categoryId) {
      this.data.itemCreatedEvent
        .subscribe(message => this.loadItems());
    }
  }

  loadItems() {
    this.listsFacade.allItems(this.categoryId, this.id)
      .subscribe(response => this.items = response);
  }

  checked(item: Item) {
    this.listsFacade.toggleItem(this.categoryId, this.id, item)
      .subscribe(response => response);
  }

  edit(event, item: Item) {
    event.stopPropagation();
    this.dialog.open(ItemModalComponent,
      {
        data: {
          itemId: item.id,
          categoryId: this.categoryId,
          listId: item.listId,
          name: item.name
        }
      });
  }

  delete(item: Item) {
    this.listsFacade.deleteItem(this.categoryId, this.id, item)
      .subscribe(response => this.loadItems());
  }

  onCreateModal() {
    this.dialog.open(ItemModalComponent,
                    { data: {
                        categoryId: this.categoryId,
                        listId: this.id
                      }
                    });
  }
}

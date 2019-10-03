import { MatDialog } from '@angular/material/dialog';
import { DataService } from './../../../core/services/data.service';
import { ListModalComponent } from './../list-modal/list-modal.component';
import { ListsFacade } from './../../../facades/lists.facade';
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

  constructor(private listsFacade: ListsFacade,
              private route: ActivatedRoute,
              private data: DataService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.categoryId = routeParams.categoryId;
      this.loadLists();
    });

    if (this.categoryId) {
      this.data.listCreatedEvent
        .subscribe(message => this.loadLists());
    }
  }

  loadLists() {
    this.listsFacade.allLists(this.categoryId)
      .subscribe(response => this.lists = response);
  }

  onCreateModal() {
    this.dialog.open(ListModalComponent,
      {
        data: {
          categoryId: this.categoryId
        }
      });
  }
}

import { DataService } from './../../../core/services/data.service';
import { CategoriesApiService } from './../../../core/services/categories-api.service';
import { Category } from './../../../core/models/category';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];

  @Input() private sidenavRef: MatSidenav;

  @Output()
  openModal: EventEmitter<any> = new EventEmitter();

  constructor(private service: CategoriesApiService,
              private data: DataService,
              public dialog: MatDialog) { }


  ngOnInit() {
    this.data.categoryCreatedEvent
      .subscribe(message => this.loadCategories());
  }

  loadCategories() {
    console.log('loadCAtegorias');
    this.service.all()
      .subscribe(data => this.categories = data);
  }

  openDialog() {
    this.openModal.emit({});
  }

  categoryCreated() {
    console.log('Categoria criada');
  }

}

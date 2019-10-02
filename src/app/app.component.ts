import { Category } from './core/models/category';
import { CategoriesApiService } from './core/services/categories-api.service';
import { NewCategoriesModalComponent } from './components/categories/category-modal/new-categories-modal.component';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private location: Location,
    public dialog: MatDialog) { }

  ngOnInit() { }

  backClicked() {
    this.location.back();
  }

  openDialogEvent() {
    this.dialog.open(NewCategoriesModalComponent, {});
  }
}

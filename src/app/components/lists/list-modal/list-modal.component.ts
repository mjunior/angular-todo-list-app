import { List } from './../../../core/models/list';
import { Item } from './../../../core/models/item';
import { DataService } from './../../../core/services/data.service';
import { ListsFacade } from './../../../facades/lists.facade';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent {

  listForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private listsFacade: ListsFacade,
              private data: DataService,
              @Inject(MAT_DIALOG_DATA) public params: any,
              public dialogRef: MatDialogRef<ListModalComponent>) { }


  onSubmit() {
    this.listsFacade.postList(this.params.categoryId, this.listForm.value)
      .subscribe((response) => this.listCreated(response));
  }

  listCreated(list: List) {
    this.data.listCreated(list);
  }
}

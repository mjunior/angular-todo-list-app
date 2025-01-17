import { Item } from './../../../core/models/item';
import { DataService } from './../../../core/services/data.service';
import { ListsFacade } from './../../../facades/lists.facade';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {

  buttonText = 'Criar item';

  itemForm = new FormGroup({
    id: new FormControl(this.params.itemId),
    name: new FormControl(this.params.name, [Validators.required])
  });

  ngOnInit(): void {
    if (this.params.itemId) {
      this.buttonText = 'Salvar item';
    }
  }

  constructor(private listsFacade: ListsFacade,
              private data: DataService,
              @Inject(MAT_DIALOG_DATA) public params: any,
              public dialogRef: MatDialogRef<ItemModalComponent>) { }

  onSubmit() {
    this.listsFacade.postItem(this.params.categoryId, this.params.listId, this.itemForm.value)
      .subscribe((response) => this.itemCreated(response));
  }

  itemCreated(item: Item) {
    console.log('Item criado');
    this.data.itemCreated(item);
  }
}

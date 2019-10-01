import { DataService } from './../../../core/services/data.service';
import { ListsFacade } from './../../../facades/lists.facade';
import { CategoriesApiService } from './../../../core/services/categories-api.service';
import { Category } from './../../../core/models/category';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-categories-modal',
  templateUrl: './new-categories-modal.html',
})
export class NewCategoriesModalComponent {

  categoryIsCreated = false;

  @Output()
  categoryCreatedEvent: EventEmitter<Category> = new EventEmitter();

  constructor(private listsFacade: ListsFacade,
              private data: DataService) { }

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.listsFacade.postCategory(this.categoryForm.value)
        .subscribe((response) => this.categoryCreated(response));
  }

  categoryCreated(category: Category) {
    this.data.categoryCreated(category);
  }
}

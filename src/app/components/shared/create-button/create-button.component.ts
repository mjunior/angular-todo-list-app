import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent implements OnInit {

  @Output()
  openCreateModal: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openDialog() {
    this.openCreateModal.emit({});
  }

}

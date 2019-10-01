import { DataService } from './services/data.service';
import { ListsFacade } from './../facades/lists.facade';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesApiService } from './services/categories-api.service';
import { ListsApiService } from './services/lists-api.service';
import { ItemsApiService } from './services/items-api.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    CategoriesApiService,
    ListsApiService,
    ItemsApiService,
    ListsFacade,
    DataService
  ]
})
export class CoreModule { }

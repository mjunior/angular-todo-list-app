import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesApiService } from './services/categories-api.service';
import { ListsApiService } from './services/lists-api.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    CategoriesApiService,
    ListsApiService
  ]
})
export class CoreModule { }

import { CategoriesApiService } from './services/categories-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [CategoriesApiService]
})
export class CoreModule { }

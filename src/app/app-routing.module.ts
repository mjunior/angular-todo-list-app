import { CategoryDetailComponent } from './components/categories/category-detail/category-detail.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesListComponent,
  }, {
    path: 'categories/:id',
    component: CategoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

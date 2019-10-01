import { ListDetailComponent } from './components/lists/list-detail/list-detail.component';
import { HomeComponent } from './components/home/home/home.component';
import { AllListsComponent } from './components/lists/all-lists/all-lists.component';
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
    component: HomeComponent,
  }, {
    path: 'categories/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'categories/:categoryId/lists',
    component: AllListsComponent
  },
  {
    path: 'categories/:categoryId/lists/:id',
    component: ListDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

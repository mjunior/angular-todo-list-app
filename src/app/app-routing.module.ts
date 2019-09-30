import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesListComponent
      }, {
        path: ':id',
        component: CategoriesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { EmptyListComponent } from './components/shared/empty-list/empty-list.component';
import { ListModalComponent } from './components/lists/list-modal/list-modal.component';
import { ListDetailComponent } from './components/items/items-list/list-detail.component';
import { NewCategoriesModalComponent } from './components/categories/category-modal/new-categories-modal.component';
import { CoreModule } from './core/core.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoryDetailComponent } from './components/categories/category-detail/category-detail.component';
import { AllListsComponent } from './components/lists/all-lists/all-lists.component';
import { HomeComponent } from './components/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//
import { MatSidenavModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CreateButtonComponent } from './components/shared/create-button/create-button.component';
import { ItemModalComponent } from './components/items/item-modal/item-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryDetailComponent,
    AllListsComponent,
    HomeComponent,
    ListDetailComponent,
    NewCategoriesModalComponent,
    CreateButtonComponent,
    ItemModalComponent,
    ListModalComponent,
    EmptyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  entryComponents: [
    NewCategoriesModalComponent,
    ItemModalComponent,
    ListModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

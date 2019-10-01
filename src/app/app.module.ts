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
import { ListDetailComponent } from './components/lists/list-detail/list-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryDetailComponent,
    AllListsComponent,
    HomeComponent,
    ListDetailComponent,
    NewCategoriesModalComponent
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
    MatInputModule
  ],
  entryComponents: [
    NewCategoriesModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

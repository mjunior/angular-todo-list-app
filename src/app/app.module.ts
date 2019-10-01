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
//
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryDetailComponent,
    AllListsComponent,
    HomeComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

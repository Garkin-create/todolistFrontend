import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HttpClientModule } from '@angular/common/http';
import { NewlistComponent } from './newlist/newlist.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NewlistComponent, 
    EditListComponent,
    EditItemComponent,
    ItemlistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

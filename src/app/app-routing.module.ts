import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

import { NewlistComponent } from './newlist/newlist.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: 'todolist', component: TodolistComponent },
  { path: 'editlist', component: EditListComponent },
  { path: 'newlist', component: NewlistComponent },
  { path: 'ga', component: ItemlistComponent }
]
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

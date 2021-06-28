import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private config:ConfigService, private http:HttpClient ) {

  }
  
  // todolist/get
  All(){
    return this.http.get(this.config._stringu+'todolist/get',{responseType:'json'})
  }

  // todolist/details/{id}
  Details(){
    return this.http.get(this.config._stringu+ 'todolist/details/'+this.config._idList, {responseType:'json'})
  }

  // todolist/Create
  Crete(body:any){
    return this.http.post(this.config._stringu+'todolist/create',body)
  }
  
  // todolist/update
  Update(body:any){
    return this.http.post(this.config._stringu+'todolist/edit',body)
  } 

  // Delete
  Delete(){
    return this.http.get(this.config._stringu+'todolist/delete/'+this.config._idList)
  }
}

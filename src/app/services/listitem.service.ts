import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListitemService {

  constructor(private config:ConfigService, private http:HttpClient ) {

  }
  
  // listitem/get
  All(){
    return this.http.get(this.config._stringu+'listitem/get',{responseType:'json'})
  }

  GetItems(id:number){
    return this.http.get(this.config._stringu+"listitem/getlist/"+id)
  }

  // listitem/details/{id}
  Details(id:number){
    return this.http.get(this.config._stringu+ 'listitem/details/'+id, {responseType:'json'})
  }

  // listitem/Create
  Crete(body:any){
    return this.http.post(this.config._stringu+'listitem/create',body)
  }
  
  // listitem/update
  Update(body:any){
    return this.http.post(this.config._stringu+'listitem/edit',body)
  } 

  // listitem/delete
  Delete(id:number){
    return this.http.get(this.config._stringu+'listitem/delete/'+id)
  }
}

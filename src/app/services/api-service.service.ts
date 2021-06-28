import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public _idList:number=0;
  public _idItem:number=0;
  public _stringu:string="https://localhost:5001/api/";

  constructor(private http:HttpClient) { 

  }

  // get(url:string,header:HttpHeaders){
  //   return this.http.get(url)
  // }
  get(url:string){
    return this.http.get(url,{responseType:'json'})
  }
  post(url:string, body:any){
    return this.http.post(url,body)
  }
  delete(url:string, body:any){
    return this.http.delete(url,body)
  }

  
  
}

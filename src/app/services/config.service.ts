import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  public _idList:number=0;
  public _idItem:number=0;
  public _stringu:string="https://localhost:5001/api/";

  constructor() { }
}

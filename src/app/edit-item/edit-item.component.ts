import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  idItem:number=9;
  lista=[]
  itemModel={
    id: 0,
    name: '',
    isComplete: false,
    toDoListId: 0,
  }
  public filtersLoaded: Promise<boolean> = Promise.resolve(false);
  constructor(private tdlService:TodolistService,private router:Router) { }

  ngOnInit(): void {
    this.tdlService.All()
      .subscribe((res:any)=>{ 
        this.lista=res
        this.filtersLoaded=Promise.resolve(true);
      })
    
  }

}

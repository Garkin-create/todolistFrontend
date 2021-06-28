import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { TodolistService } from '../services/todolist.service';
import { ListitemService } from '../services/listitem.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  edit:boolean=false;
  editItem:boolean=false;
  item:boolean=false;
  errorM:string="valid";

  model = {
    id:0,
    name: ''
  }

  itemModel={
    id: 0,
    name: '',
    isComplete: false,
    toDoListId: 0,
  }

  listItem=[]
  public filtersLoaded: Promise<boolean> = Promise.resolve(false);
  
  constructor(private configService:ConfigService, private tdlService:TodolistService, private itemService:ListitemService,
    private router:Router) {
  }

  async ngOnInit() {
    await this.tdlService.Details()
    .subscribe((res:any)=>{ 
      this.filtersLoaded=Promise.resolve(true);
      this.model=res
    })
  }

  Update(){
      if(this.model.name!=""){
      this.tdlService.Update(this.model)
      .subscribe((res:any)=>{
        this.filtersLoaded=Promise.resolve(true);
        this.edit=false;
        this.errorM="valid"
      })
    }
    else{
      this.errorM="Requerid"
    }
  }

  Delete(){
    
    this.tdlService.Delete()
    .subscribe((res:any)=>{
        this.filtersLoaded=Promise.resolve(true);
        this.router.navigate(['/todolist'])
    })
  }

  SaveItem(){
    if(this.itemModel.name!=""){  
      this.itemModel.toDoListId=this.model.id
      this.itemService.Crete(this.itemModel)
      .subscribe((res:any)=>{
        this.errorM="valid"
        this.itemModel = {
              id: 0,
              name: '',
              isComplete: false,
              toDoListId: 0
          }
        this.ngOnInit()
      },
      (err)=>{
          console.log(err)
      })
    }else{
      this.errorM="Requerid"
    }
  }


  EditItem(id:number){
    this.configService._idItem=id;
    this.router.navigate(['/editItem'])
  }

  Back(){
    this.router.navigate(['/todolist'])
  }

}

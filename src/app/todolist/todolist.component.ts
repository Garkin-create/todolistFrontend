import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Router } from '@angular/router';
import { TodolistService } from '../services/todolist.service';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public filtersLoaded: Promise<boolean> = Promise.resolve(false);
  todolist=  [];

  constructor(private tdlistService:TodolistService,private configService:ConfigService
    ,private router:Router) {

  }

  ngOnInit(): void {
    this.tdlistService.All()
    .subscribe((res:any)=>{
      this.todolist=res
      console.log(this.todolist);
      console.log(res);
      
      
      this.filtersLoaded=Promise.resolve(true);
    },
    (err)=>{
      console.log(err)
    })
  }

  Create(){
    this.router.navigate(['/newlist'])
  }

  Detail(_id:number){
    this.configService._idList=_id;
    console.log(_id);
    console.log(this.configService._idList);
    
    
    this.router.navigate(['/editlist'])
  }
}

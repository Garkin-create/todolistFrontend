import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';

  import { from } from 'rxjs';
import { TodolistService } from '../services/todolist.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent{

  errorM:string="valid";
  
  model={    
    name: ''
  }

  constructor(private tdlService:TodolistService,private router:Router) { 
    
  }

  Create(): void {

    if(this.model.name!=""){      
      this.tdlService.Crete(this.model)
      .subscribe((res:any)=>{      
        this.router.navigate(['/todolist'])
        this.errorM="valid"
      },
      (err)=>{
      })
      }
      else{
        this.errorM="Requerid"
      }
  }

  Cancel(){
    this.router.navigate(['/todolist'])
  }



}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { ListitemService } from '../services/listitem.service';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  visible:number=0
  errorM:string="valid";
  model={
    id:0,
    name:'',
    isComplete:false
  }

  listItem=[]

  public filtersLoaded: Promise<boolean> = Promise.resolve(false);
  constructor(private configService:ConfigService,private itemService:ListitemService) { }

 async ngOnInit(){
    await this.itemService.GetItems(this.configService._idList)
      .subscribe((res:any)=>{ 
      this.listItem=res 
      console.log(this.listItem);
      })
  }

  async IsComplete(event: any, id:number){
    if (event.target.checked) {
     await this.itemService.Details(id)
      .subscribe((res:any)=>{ 
        this.model=res 
        this.model.isComplete=true        
      this.itemService.Update(this.model)
     .subscribe((res:any)=>{
      this.ngOnInit() 
     })   
        
    })  
    }
    else{
      await this.itemService.Details(id)
      .subscribe((res:any)=>{ 
        this.model=res 
        this.model.isComplete=false
        this.itemService.Update(this.model)        
      .subscribe((res:any)=>{
        this.ngOnInit()
      })
      })        
    }
  }

  DeleteItem(id:number){
    this.itemService.Delete(id)
    .subscribe((res:any)=>{
      this.ngOnInit() 
     })
  }

  EditItem(item:any){
   
      this.model=item
      this.visible=item.id 
      
    
  }

  Cancel(){
    this.visible=0
  }

  Update(){
    if(this.model.name!=""){
      this.itemService.Update(this.model)
    .subscribe((res:any)=>{
      this.ngOnInit() 
     })
    this.visible=0
      this.errorM="valid"
    }
    else{
      this.errorM="Requerid"
    }
    
  }
  
}

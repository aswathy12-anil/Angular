import { Component,OnInit } from '@angular/core';
import { MyserviceService,WebApiTab } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-alldetails',
  templateUrl: './display-alldetails.component.html',
  styleUrls: ['./display-alldetails.component.css']
})
export class DisplayAlldetailsComponent implements OnInit {
Getdata:WebApiTab[]=[];
constructor(public details:MyserviceService,private router:Router){}
ngOnInit(): void {
  this.GetAllDetails();
}
GetAllDetails():void{
  this.details.getAllWebApiTabs().subscribe((resp:any)=>{
    this.Getdata=resp;
  });
}
delete(id:number):void{
  this.details.deleteWebApiTab(id)
  .subscribe(()=>{
    this.GetAllDetails();
  },(err)=>{
console.log(err);
  }
);
}
}

import { Component,OnInit } from '@angular/core';
import { MyserviceService, WebApiTab } from '../myservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-with-id',
  templateUrl: './display-with-id.component.html',
  styleUrls: ['./display-with-id.component.css']
})
export class DisplayWithIdComponent implements OnInit {
  student:WebApiTab|undefined;
  id:number=0;
  constructor(public rest:MyserviceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    var paramId=this.route.snapshot.paramMap.get ("id");
    if(paramId!==null && paramId!==undefined){
      this.id=+paramId;
    }
    this.rest.getWebApiTab(this.id).subscribe(
      (data:WebApiTab)=>this.student={...data}
    );
  
  }

  

}

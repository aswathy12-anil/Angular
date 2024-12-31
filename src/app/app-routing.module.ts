import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { DisplayAlldetailsComponent } from './display-alldetails/display-alldetails.component';
import { DisplayWithIdComponent } from './display-with-id/display-with-id.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
const routes: Routes = [
  {path:'',component:DisplayAlldetailsComponent},
  {path:'AllDetails',component:DisplayAlldetailsComponent},
  {path:'insertdb',component:InsertDetailsComponent},
  {path:'details/:id',component:DisplayWithIdComponent},
  {path:'editdetails/:id',component:EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

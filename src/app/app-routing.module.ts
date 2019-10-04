import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CommentsComponent } from './comments/comments.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [{path:"",pathMatch:"full",component:HomeComponent},
                         {path:"list",component:ListComponent},
                        {path:"add",component:AddComponent},
                      {path:"edit/:id",component:EditComponent},
                     {path:"comments/:id",component:CommentsComponent},
                    {path:"view/:id",component:ViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CommentsComponent } from './comments/comments.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddComponent,
    ListComponent,
    HomeComponent,
    EditComponent,
    CommentsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

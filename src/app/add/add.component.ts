import { Component, OnInit } from '@angular/core';
import {DataServiceService}  from '../data-service.service';
import {User}  from "../user.modal";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name:string="";
  price:number=0;
  author:string="";
  id:number=0;
  newUser:User;
  
  constructor(private Data: DataServiceService) { }

  ngOnInit() {
    
  }

  addition(){
    this.newUser=new User(this.Data.user.length,this.name,this.price,this.author);
    console.log(this.newUser);
    this.Data.add(this.newUser);
  }



}

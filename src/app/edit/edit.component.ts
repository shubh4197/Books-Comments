import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import {User} from "../user.modal";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   index:number;
   name:string="";
   price:number=0;
   author:string="";
   use:User;

  constructor(private Data:DataServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.index=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.index);
   
  }

  edith(){
    console.log("ok");
    this.use=new User(this.index,this.name,this.price,this.author);
    this.Data.user[this.index] = this.use;
  }

}

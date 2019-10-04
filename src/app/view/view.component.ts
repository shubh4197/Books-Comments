import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import {Comments} from "../comments/comments.modal"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  name:string="";
  price:number=0;
  author:string="";
  comments:Comments[]=[];
  index:number=0

  constructor(private Data:DataServiceService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.index=parseInt(this.route.snapshot.paramMap.get('id'))
    this.name=this.Data.user[this.index].name;
    this.price=this.Data.user[this.index].price;
    this.author=this.Data.user[this.index].Author;
    this.comments=this.Data.user[this.index].comments;
  }

}

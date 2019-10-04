import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import {Comments} from "./comments.modal";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  name:string="";
  comment:string="";
  index:number=0;
  constructor(private Data:DataServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.index=parseInt(this.route.snapshot.paramMap.get('id'));
  }

  addComments()
  {
    this.Data.user[this.index].comments.push(new Comments(this.name,this.comment));
    console.log(this.Data.user);
  }

}

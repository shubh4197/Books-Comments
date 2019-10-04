import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import {User} from "../user.modal"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  book:User[]=[]
  constructor(public list:DataServiceService) { }

  ngOnInit() {
    this.book=this.list.user;
  }
  
}

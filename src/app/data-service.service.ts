import { Injectable } from '@angular/core';
import { User} from './user.modal'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  static add(newUser: User) {
    throw new Error("Method not implemented.");
  }
  user:User[]=[];
  constructor() { }

  add(value){
    this.user.push(value);
    console.log(this.user);
  }

  edit(index,value){
   this.user[index]=value;
  }
}

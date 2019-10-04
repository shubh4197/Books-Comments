import {Comments} from "./comments/comments.modal";

export class User{
    name:string;
    price:number;
    Author:string;
    id:number=0;
    comments:Comments[]=[];

    constructor(id,name,price,author)
    {   this.id=id;
        this.name=name;
        this.price=price;
        this.Author=author;
    }
}
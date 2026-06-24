import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root',
})
export class StaticProducts {
  products:Iproducts[]

  constructor(){
    this.products =[{id:1,
    name:'dell laptop',
    price:100,
    quantity:0,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:1},
    {id:2,
    name:'hp laptop',
    price:200,
    quantity:20,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:1},
    {id:3,
    name:'lenovo laptop',
    price:300,
    quantity:30,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:1},
    {id:4,
    name:'asus laptop',
    price:400,
    quantity:40,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:1},
  {id:5,
    name:'samsung mobile',
    price:500,
    quantity:50,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:2},
  {id:6,
    name:'iphone mobile',
    price:600,
    quantity:2,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:2},
  {id:7,
    name:'huawei mobile',
    price:700,
    quantity:70,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:2},
  {id:8,
    name:'oppo mobile',
    price:800,
    quantity:1,
    imageUrl:'https://fakeimg.pl/300/',
    categoryId:2}]
  }
  getAllProducts():Iproducts[]{
    return this.products
  }
  getProductsbyid(id:number):Iproducts | null{
    let foundpd = this.products.find((p)=>p.id==id)
  return foundpd? foundpd : null

  }
  getproductbycatid(id:number):Iproducts[]{
    if(id ==0){
      return this.products
    }
    else{
    return this.products.filter((p)=>p.categoryId==id)}

  }
  getproductsMap(){
   return this.products.map((prd)=>prd.id)
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../../models/iproducts';
import { Products } from '../products/products';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-order',
  imports: [FormsModule, Products,CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements AfterViewInit{
   categories :Icategory[]
   selectedcatid:number=0
totalprice :number=0;
@ViewChild('userInput') myInput !:ElementRef
@ViewChild(Products) prd!:Products
   constructor(){
    this.categories =[{id:1,name:'laptop'},{id:2,name:'mobile'}]
   }
   ngAfterViewInit(): void {

      console.log(this.prd.products)
   }
calcuprice(top:number){
  this.totalprice = top
}


}

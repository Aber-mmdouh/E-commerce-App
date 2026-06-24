import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { Iproducts } from '../../models/iproducts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProduct } from '../../services/api-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  imports: [FormsModule,CommonModule],
  templateUrl: './addproducts.html',
  styleUrl: './addproducts.css',
})
export class Addproducts {
  categories:Icategory[]
  NewProduct :Iproducts ={} as Iproducts;
  constructor(private _apiPrduct:ApiProduct,
    private router:Router){
    this.categories=[{id:1,name:'laptop'},{id:2,name:'mobile'}]
  }
  AddProduct(){
this._apiPrduct.AddProducts(this.NewProduct).subscribe({
  next:()=>{
    this.router.navigateByUrl("/product")

  },
  error:(err)=>{console.log(err);
  }
})
  }
}

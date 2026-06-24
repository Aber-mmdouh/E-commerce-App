import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import{ Iproducts } from '../../models/iproducts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Apphighlighter } from '../../directives/apphighlighter';
import { CubePipe } from '../../pipes/cube-pipe';
import {StaticProducts} from '../../services/static-products'
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { ApiProduct } from '../../services/api-product';
@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, Apphighlighter],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges,OnInit {


  products:Iproducts[] =[] as Iproducts[]

  num :number =4
  mydate :Date = new Date()
  filterproducts :Iproducts[] =[]
   totalOrder  :number=0;
@Output() onChangeTotal:EventEmitter<number> = new EventEmitter<number>();
  @Input() receivedcat :number =0
  constructor(private  _apiProduct:ApiProduct,
    private _router:Router
  ){}
ngOnInit(): void {
    this._apiProduct.getAllproducts().subscribe({
  next:(res)=> {this.products = res;
  this.filterproducts = this.products},

  error:(err)=> {console.log(err)}
  }
)

 }
ngOnChanges() {
this._apiProduct.getProductByCatId(this.receivedcat).subscribe({
  next:(res)=>{this.filterproducts =res},
  error:(err)=>{console.log(err)}
})
  //  this.filterproducts=this._staticproducts.getproductbycatid(this.receivedcat)
}


filterproduct(){
    if (this.receivedcat == 0)
      this.filterproducts = this.products
    else
    this.filterproducts=this.products.filter(p=>p.categoryId == this.receivedcat)

  }
  buy(qty:string,price:number){
   this.totalOrder += +qty * price
   this.onChangeTotal.emit(this.totalOrder)

  }
  navigate(id:number){
this._router.navigateByUrl(`/details/${id}`)

 }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { RouterLinkWithHref } from "@angular/router";
import { StaticProducts } from '../../services/static-products';
import { Iproducts } from '../../models/iproducts';
import { Location } from '@angular/common';
import { ApiProduct } from '../../services/api-product';

@Component({
  selector: 'app-details',
  imports: [RouterOutlet],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  currentId:number =0
  products:Iproducts[] =[]
  product :Iproducts ={} as Iproducts
  idsArry!:number[]
  constructor(private _activRoute:ActivatedRoute,
    private  _staticprd:StaticProducts,
    private _location:Location,
    private _router:Router,
    private _apiproducts:ApiProduct
  ){
  this._apiproducts.getAllproducts().subscribe((res)=>{
  this.products=res;
  this.idsArry = this.products.map((prd)=>prd.id)}
)
  }
  ngOnInit() {
   this._activRoute.paramMap.subscribe((paraMap)=>{
     this.currentId= Number(paraMap.get("id"))});
this._apiproducts.getProductByid(this.currentId).subscribe({
  next:(res)=>{ this.product=res;

  },
  error:(err)=>console.log(err)
})
  }
  back(){
    this._location.back()

  }
  goBack(){
    let currentIdIndex = this.idsArry.findIndex((id)=>id==this.currentId)
    if(currentIdIndex!=0){
this._router.navigateByUrl(`/details/${this.idsArry[currentIdIndex - 1]}`)}

  }
  forward(){
let currentIdindx = this.idsArry.findIndex((id)=>id==this.currentId)
if(currentIdindx!=this.idsArry.length-1){
this._router.navigateByUrl(`/details/${this.idsArry[currentIdindx +1]}`)
  }}
}

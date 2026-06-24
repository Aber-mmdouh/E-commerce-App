import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/iproducts';
import { Products } from '../components/products/products';
import { environment } from '../../environments/environment.development';
import { UserAuth } from './user-auth';

@Injectable({
  providedIn: 'root',
})
export class ApiProduct  {
  constructor(private _HttpClient:HttpClient,private _authUser:UserAuth){}

  getAllproducts():Observable<Iproducts[]>{
    return this._HttpClient.get<Iproducts[]>(`${environment.baseUrl}/products`)
  }
  getProductByid(id:number):Observable<Iproducts>{
    return  this._HttpClient.get<Iproducts>(`${environment.baseUrl}/products/${id}`)
  }
  getProductByCatId(catId:number):Observable<Iproducts[]>{
    let searchparam = new HttpParams()
    searchparam = searchparam.append("catId",catId)
        searchparam = searchparam.append("limit",5)

    return this._HttpClient.get<Iproducts[]>(`${environment.baseUrl}/products`,{
      params:searchparam
    })
  }

  AddProducts(product:Iproducts):Observable<Iproducts>{
    return this._HttpClient.post<Iproducts>(`${environment.baseUrl}/products`,JSON.stringify(product))
  }
  updateProducts(Nproduct:Iproducts,id:number):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}/products/${id}`,Nproduct)
  }
  deleteProduct(id:number):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/products/${id}`)

  }
}

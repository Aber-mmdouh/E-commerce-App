import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Order } from './components/order/order';
 import { Notfound } from './components/notfound/notfound';

import { Vision } from './components/vision/vision';
import { Contact } from './components/contact/contact';
import { Details } from './components/details/details';
import { Products } from './components/products/products';
import { Login } from './components/login/login';
import { logGuard } from './guards/log-guard';
import { CanActivate} from '@angular/router';
import { Addproducts } from './components/addproducts/addproducts';
import { Register } from './components/register/register';

export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
 { path:'home',component:Home},
 {path :'About',component:About,children :[
  {path :'',pathMatch:'full',redirectTo:'Vision'},
  {path:'Vision',component:Vision},
  {path:'Contact',component:Contact}
 ]},
 {path:'product',loadComponent:()=>import('./components/order/order').then((obj)=>obj.Order),canActivate:[logGuard]},
 {path:'details/:id',component:Details},
 {path:'login',component:Login},
 {path:'addProduct',component:Addproducts},
 {path:'register',component:Register},
 {path:'**',component:Notfound}

];

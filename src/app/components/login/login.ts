import { Component, OnInit, signal } from '@angular/core';
import { UserAuth } from '../../services/user-auth';
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";
import { FormsModule, NgForm } from "@angular/forms";

import { exhaustMap, take } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login  {
  Isloggeduser:boolean
  email=signal('')
  password=signal('')
isLogginMode=true
error=signal(null)
authentication=signal(false)
  injector: any;
  constructor(private _authUser:UserAuth,private http:HttpClient){
    this.Isloggeduser=this._authUser.Islogged()
  }

  switchmode(){
    this.isLogginMode=!this.isLogginMode
  }


onsubmit(form:NgForm){
this.isLogginMode=true
this._authUser.login(this.email(),this.password()).subscribe({
next:()=>{
  this.isLogginMode=true

},
error:(erroMessage)=>{this.error.set(erroMessage)}
})
if(this.isLogginMode){

}else{

this._authUser.signup(this.email(),this.password()).subscribe({
  next:(res)=>{console.log(res)},
  error:(errorMessage)=>{
    this.error=errorMessage

  }
})
}
form.reset()
}

    }





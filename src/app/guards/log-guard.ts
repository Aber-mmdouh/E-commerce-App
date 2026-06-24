import { inject } from '@angular/core/primitives/di';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const logGuard: CanActivateFn = (route, state) =>{
  return true
  // let _userAuth=inject(UserAuth)
  //   let router = inject(Router)
  //   if(localStorage.getItem("token")){
  //     return true
  //     }else{
  //     alert("you must login first  ")
  //     router.navigateByUrl("/login")
  //     return false
  //   }


};

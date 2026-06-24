import { HttpEventType, HttpHandlerFn, HttpParams, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { exhaustMap, take, tap } from "rxjs";
import { UserAuth } from "../services/user-auth";

export function authInterceptor(req:HttpRequest<any>,next:HttpHandlerFn){
  const authService=inject(UserAuth)
  const user = authService.user.pipe(take(1),exhaustMap((user)=>{
    if (!user){
  return next(req)
}
let modifiedReq =req.clone({
}
)
return next(modifiedReq)
 })
)}



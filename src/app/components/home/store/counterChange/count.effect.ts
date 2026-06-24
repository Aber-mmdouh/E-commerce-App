import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decreament, Increament, Init, set } from "./count.action";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { CountSelect } from "./count.select";

export class countEffect{
  constructor(private actions$:Actions,private store:Store<{changeValue:number}>){}
  loadCount=createEffect(()=>
  this.actions$.pipe(ofType(Init),
switchMap(()=>{
  const storedCount = localStorage.getItem('count')
  if(storedCount){return of(set({value:+storedCount}))}
  return of(set({value:0}))

}
)))


  saveCount=createEffect(()=>this.actions$.pipe(
    ofType(Increament,decreament),
    withLatestFrom(this.store.select(CountSelect)),
    tap(([action,counter])=> {console.log(action)
  localStorage.setItem('count',counter.toString())}
  )),{dispatch:false}

 )
}

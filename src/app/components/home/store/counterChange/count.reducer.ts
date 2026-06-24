import { createReducer, on } from "@ngrx/store";
import { decreament, Increament, Init, set } from "./count.action";
let intialState =0
export const countReducer=createReducer(intialState,on(
  Increament,(state,action)=>state +action.value
),on(decreament,(state,action)=>state-action.value),
on(set,(state,action)=>action.value))

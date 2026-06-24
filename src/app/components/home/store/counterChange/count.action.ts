import { createAction, props } from "@ngrx/store";
export const Init =createAction('Init')
export const set =createAction('set',props<{value:number}>())
export const Increament=createAction('increase',props<{value:2}>())
export const decreament=createAction('decrease',props<{value:2}>())

import { createSelector } from "@ngrx/store"
export const CountSelect =(State:{changeValue:number})=>State.changeValue

export const doubleCount=createSelector(CountSelect,(state)=>state*4)


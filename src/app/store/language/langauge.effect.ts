import {  Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { languageAction } from "./lang.action";
@Injectable()
export class LanguageEffect{
  storeLanguage = createEffect(()=>this.actions.pipe(ofType(languageAction),tap((action)=>{localStorage.setItem("lang",action.lang)})),{dispatch:false})
  constructor(private actions:Actions){

  }
}

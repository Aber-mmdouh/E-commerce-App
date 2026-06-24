import { createAction, props } from "@ngrx/store";

export const languageAction = createAction("changeLang",props<{lang:string}>())

import { createReducer, on } from '@ngrx/store';
import { languageAction } from './lang.action';
let intialState = localStorage.getItem('lang') ? localStorage.getItem : 'en';
export const languageReducer = createReducer(
  intialState,
  on(languageAction, (state, action) => action.lang)
);

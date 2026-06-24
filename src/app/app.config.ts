import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/authInterceptor.service';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { languageReducer } from './store/language/lang.reducer';
import { provideEffects } from '@ngrx/effects';
import { LanguageEffect } from './store/language/langauge.effect';
import { countReducer } from './components/home/store/counterChange/count.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([])),
    provideStore({ counter: counterReducer, Language: languageReducer, changeValue: countReducer }),
    provideEffects()
  ],
};

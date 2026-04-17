import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // 🔥 Adding preloading makes the dashboard load instantly after login
    provideRouter(routes, withPreloading(PreloadAllModules)) 
  ]
};
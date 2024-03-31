import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import LocaleEsCo from '@angular/common/locales/es-CO';

import { routes } from './app.routes';

registerLocaleData(LocaleEsCo);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

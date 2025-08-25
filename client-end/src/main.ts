import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ConfigurationService } from './app/service/configuration.service';

export function initAppConfig(configService: ConfigurationService) {
  return () => configService.initConfiguration('public/config');
}


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));


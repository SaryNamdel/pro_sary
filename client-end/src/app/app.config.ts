import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ChatService } from './components/services/chat.service';
import { RenterService } from './components/services/renter.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ConfigurationService } from './service/configuration.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),

    {
      provide: APP_INITIALIZER,
      useFactory: initConfigValues,
      deps: [ConfigurationService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initChat,
      deps: [ChatService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initRenter,
      deps: [RenterService],
      multi: true
    }
  ]
};






// export function initConfigValues(config: ConfigurationService) {
//   console.log('typeof config:', typeof config);
//   console.log('initConfiguration in config?', 'initConfiguration' in config);
//   return (() => config.initConfiguration('/config'));
// }

export function initConfigValues(config: ConfigurationService) {
  console.log('typeof config:', typeof config);
  console.log('initConfiguration in config?', 'initConfiguration' in config);
  return () => config.initConfiguration('assets/config');
}


export function initChat(chatService: ChatService) {
  return (() => chatService.getBotMessage(""));
}
export function initRenter(renterService: RenterService) {
  return (() => renterService.getStatus());
}



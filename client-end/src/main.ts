// import { bootstrapApplication } from '@angular/platform-browser';
// // import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { APP_INITIALIZER } from '@angular/core';
// import { provideHttpClient } from '@angular/common/http';
// import { ConfigurationService } from './app/service/configuration.service';

// export function initAppConfig(configService: ConfigurationService) {
  
//   return () => configService.initConfiguration('public/config');
// }


// // bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));

// bootstrapApplication(AppComponent)
//   .catch((err) => console.error(err));



////////////////////////////////////////////////////////////////////////////////////////////
// src/main.ts

// אתחול אפליקציית Angular במבנה Standalone
// import { bootstrapApplication } from '@angular/platform-browser';
// import { APP_INITIALIZER } from '@angular/core';
// import { provideHttpClient } from '@angular/common/http';

// import { AppComponent } from './app/app.component';
// import { ConfigurationService } from './app/service/configuration.service';

// // פונקציית אתחול שרצה לפני עליית האפליקציה
// export function initAppConfig(configService: ConfigurationService) {
//   // חשוב: הפונקציה שמוחזרת חייבת להחזיר Promise/Observable או void
//   return () => configService.initConfiguration('assets/config');
// }

// // עליית האפליקציה עם ספקים (Providers)
// bootstrapApplication(AppComponent, {
//   providers: [
//     // מספק HttpClient לכל האפליקציה (פותח את הבעיה: No provider for _HttpClient)
//     provideHttpClient(),

//     // אם ה־ConfigurationService לא מסומן providedIn:'root', נשאיר אותו כ־provider מפורשות:
//     ConfigurationService,

//     // APP_INITIALIZER מריץ את טעינת הקונפיגורציה לפני ה-bootstrap
//     {
//       provide: APP_INITIALIZER,
//       useFactory: initAppConfig,
//       deps: [ConfigurationService],
//       multi: true,
//     },
//   ],
// })
// .catch((err) => console.error(err));



// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, provideRouter } from '@angular/router';   // ✅ נוסיף ראוטינג

import { AppComponent } from './app/app.component';
import { ConfigurationService } from './app/service/configuration.service';
import { routes } from './app/app.routes';   

// פונקציית אתחול שרצה לפני עליית האפליקציה
export function initAppConfig(configService: ConfigurationService) {
  return () => configService.initConfiguration('assets/config');
}

// Bootstrap של האפליקציה עם Providers
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),   // ✅ חיבור הראוטים לאפליקציה
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfig,
      deps: [ConfigurationService],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));


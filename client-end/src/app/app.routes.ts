// import { Routes } from '@angular/router';

// export const routes: Routes = [

//   { path: '', redirectTo: 'app', pathMatch: 'full' },
//   {
//     path: 'home',
//     loadComponent: () =>
//       import('./components/home/home.component').then((m) => m.HomeComponent),
//   },
//   {
//     path: 'nav-bar',
//     loadComponent: () =>
//       import('./components/nav-bar/nav-bar.component').then((m) => m.NavBarComponent)
//   },
//   {
//     path: 'speak-with-bot',
//     loadComponent: () =>
//       import('./components/speak-with-bot/speak-with-bot.component').then((m) => m.SpeakWithBotComponent)
//   },
//   {
//     path: 'add-details',
//     loadComponent: () =>
//       import('./components/add-details/add-details.component').then((m) => m.AddDetailsComponent)
//   },
//   {
//     path: 'end',
//     loadComponent: () =>
//       import('./components/end/end.component').then((m) => m.EndComponent)
//   },
//   {
//     path: 'apartment-pool',
//     loadComponent: () =>
//       import('./components/apartment-pool/apartment-pool.component').then((m) => m.ApartmentPoolComponent)
//   },
//   {
//     path: 'sign-renter',
//     loadComponent: () =>
//       import('./components/sign-renter/sign-renter.component').then((m) => m.SignRenterComponent),
//   },
//   {
//     path: 'renter',
//     loadComponent: () =>
//       import('./components/renter/renter.component').then((m) => m.RenterComponent)
//   },
//   {
//     path: 'sign-customer',
//     loadComponent: () =>
//       import('./components/sign-customer/sign-customer.component').then((m) => m.SignCustomerComponent)
//   },
//   {
//     path: 'customer',
//     loadComponent: () =>
//       import('./components/customer/customer.component').then((m) => m.CustomerComponent)
//   },
//   {
//     path: 'calendar',
//     loadComponent: () =>
//       import('./components/calendar/calendar.component').then((m) => m.CalendarComponent)
//   },
// ];




















////////////////////////////////


// import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';

// export const routes: Routes = [

//   {
//     path: '',
//     component: AppComponent,
//     children: [
//       {
//         path: 'home',
//         loadComponent: () =>
//           import('./components/home/home.component').then((m) => m.HomeComponent)
//       },
//       {
//         path: 'speak-with-bot',
//         loadComponent: () =>
//           import('./components/speak-with-bot/speak-with-bot.component').then((m) =>
//             m.SpeakWithBotComponent)
//       },
//       {
//         path: 'add-details',

//         loadComponent: () =>
//           import('./components/add-details/add-details.component').then((m) =>
//             m.AddDetailsComponent)
//       },
//       {
//         path: 'apartment',
//         loadComponent: () =>
//           import('./components/apartment-pool/apartment-pool.component').then((m) =>
//             m.ApartmentPoolComponent)
//       },
//       {
//         path: 'renter',
//         loadComponent: () =>
//           import('./components/renter/renter.component').then((m) =>
//             m.RenterComponent)
//       },
//       {
//         path: 'end',
//         loadComponent: () =>
//           import('./components/end/end.component').then((m) => m.EndComponent)
//       }
//     ]
//   },

// ];


import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'nav-bar',
    loadComponent: () =>
      import('./components/nav-bar/nav-bar.component').then((m) => m.NavBarComponent)
  },
  {
    path: 'speak-with-bot',
    loadComponent: () =>
      import('./components/speak-with-bot/speak-with-bot.component').then((m) => m.SpeakWithBotComponent)
  },
  {
    path: 'add-details',
    loadComponent: () =>
      import('./components/add-details/add-details.component').then((m) => m.AddDetailsComponent)
  },
  {
    path: 'end',
    loadComponent: () =>
      import('./components/end/end.component').then((m) => m.EndComponent)
  },
  {
    path: 'apartment-pool',
    loadComponent: () =>
      import('./components/apartment-pool/apartment-pool.component').then((m) => m.ApartmentPoolComponent)
  },
  {
    path: 'sign-renter',
    loadComponent: () =>
      import('./components/sign-renter/sign-renter.component').then((m) => m.SignRenterComponent),
  },
  {
    path: 'renter',
    loadComponent: () =>
      import('./components/renter/renter.component').then((m) => m.RenterComponent)
  },
  {
    path: 'sign-customer',
    loadComponent: () =>
      import('./components/sign-customer/sign-customer.component').then((m) => m.SignCustomerComponent)
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./components/customer/customer.component').then((m) => m.CustomerComponent)
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./components/calendar/calendar.component').then((m) => m.CalendarComponent)
  },
  {
    path: 'suitable-apartments',
    loadComponent: () =>
      import('./components/suitable-apartments/suitable-apartments.component').then((m) => m.SuitableApartmentsComponent)
  }
];


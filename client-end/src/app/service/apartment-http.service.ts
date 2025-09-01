import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Apartment } from '../models/Apartment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';

@Injectable({ providedIn: 'root' })


export class ApartmentHttpService extends HttpServiceBase {

  //from ai
  constructor(http: HttpClient, config: ConfigurationService) {
    super(http, config);
  }


  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/apartments`;
    // return `${this.config.ips.servicePath}/apartments`
  }

  ////////////////////
  try(){
    this.http.get<any[]>(`${this._serverUrl}/api/apartments`)
    .subscribe({
      next: (res) => {
        console.log('GET apartments -> object?', typeof res, res);
        // res צריך להיות מערך של דירות (object), לא מחרוזת
      },
      error: (err) => console.error('GET apartments failed', err)
    });
  
  this.http.post<any>(`${this._serverUrl}/api/apartments`, {
    cityId: 1, park: true, numBeds: 2, priceToBed: 100
  }).subscribe({
    next: (res) => console.log('POST apartment created', res),
    error: (err) => console.error('POST apartment failed', err)
  });
  }

  getApartments$(): Observable<Apartment[]> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: '',
    }));
  };

  getApartmentById$(id: any): Observable<Apartment> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getApartmentById',
      params: { id },
    }));
  }
  getApartmentByItem$(item: any): Observable<Apartment> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getApartmentByItem',
      params: { item },
    }));
  }

  search$(name: string): Observable<boolean> {

    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'search',
      params: { name },
    }));
  }

  addApartment$(apartment: Apartment): Observable<any> {

    return this.post$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'addApartment',
      body: apartment,
    }));
  }
  updateApartment$(id: string | number, apartments: Apartment): Observable<any> {
    return this.put$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'updateApartment',
      body: apartments,
      params: { id },
    }));
  }
  deleteApartment$(id: string | number): Observable<any> {
    return this.delete$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'deleteApartment',
      params: { id },
    }));
  }


  getImagesByApartment(apartmentId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.config.ips.servicePath}/api/images/${apartmentId}`);
  }

  // getBot(): Observable<string[]> {
  //   this.http.post<any>(`${this.config.ips.servicePath}/api/bot/message`, { text: 'סיים' })
  //   .subscribe(res => {
  //     console.log('Response:', res, 'typeof:', typeof res);
  //     // צריך להיות object, ולא string
  //   });
  // }

  checkBotResponse() {
    const url = `${this.config.ips.servicePath}/api/bot/message`;
    const body = { text: 'סיים' };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    this.http.post<any>(url, body, { headers }).subscribe({
      next: (res) => {
        console.log('Response:', res, 'typeof:', typeof res);
        if (typeof res === 'object' && res.apartments) {
          console.log('Apartments:', res.apartments);
        }
      },
      error: (err) => {
        console.error('Error calling bot API:', err);
      }
    });
  }




  
}



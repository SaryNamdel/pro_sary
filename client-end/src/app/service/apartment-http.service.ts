import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Apartment } from '../models/Apartment';
import { HttpClient } from '@angular/common/http';
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

  getApartments$(): Observable<Apartment[]> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getApartments',
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
}


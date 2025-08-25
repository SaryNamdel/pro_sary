import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { RenterAndApartment } from '../models/RenterAndApartment';

@Injectable({  providedIn: 'root'})
export class RenterAndApartmentHttpService extends HttpServiceBase {
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/rentersApartments`;
    // return `${this.config.ips.servicePath}/RenterAndApartments`
  }

  getRenterAndApartments$(): Observable<RenterAndApartment[]> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getRenterAndApartments',
     }));
   };
 
   getRenterAndApartmentById$(id: any): Observable<RenterAndApartment> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getRenterAndApartmentById',
       params: { id },
     }));
   }
   getRenterAndApartmentByItem$(item:any): Observable<RenterAndApartment> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getRenterAndApartmentByItem',
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
 
   addRenterAndApartment$(RenterAndApartments: RenterAndApartment) {
 
     return this.post$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'addRenterAndApartment',
       body: RenterAndApartments,
     }));
   }
   updateRenterAndApartment$(id:any,RenterAndApartments:RenterAndApartment){
    return this.put$(new HttpRequestModel({
        url: this._serverUrl,
        action: 'addRenterAndApartment',
        body: RenterAndApartments,
        params: { id },
      }));
    }
    deleteRenterAndApartment$(id:any){
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteRenterAndApartment',
            params: { id },
          }));
    }
   }


 
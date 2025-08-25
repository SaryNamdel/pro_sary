import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { CustomerAndApartment } from '../models/CustomerAndApartment';

@Injectable({  providedIn: 'root'})
export class CusromerAndApartmentHttpService extends HttpServiceBase {
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/customerApartments`;
    // return `${this.config.ips.servicePath}/CusromerAndApartments`
  }

  getCusromerAndApartments$(): Observable<CustomerAndApartment[]> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getCusromerAndApartments',
     }));
   };
 
   getCusromerAndApartmentById$(id: any): Observable<CustomerAndApartment> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getCusromerAndApartmentById',
       params: { id },
     }));
   }
   getCusromerAndApartmentByItem$(item:any): Observable<CustomerAndApartment> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCusromerAndApartmentByItem',
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
 
   addCusromerAndApartment$(CusromerAndApartments: CustomerAndApartment) {
 
     return this.post$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'addCusromerAndApartment',
       body: CusromerAndApartments,
     }));
   }
   updateCusromerAndApartment$(id:any,CusromerAndApartments:CustomerAndApartment){
    return this.put$(new HttpRequestModel({
        url: this._serverUrl,
        action: 'addCusromerAndApartment',
        body: CusromerAndApartments,
        params: { id },
      }));
    }
    deleteCusromerAndApartment$(id:any){
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteCusromerAndApartment',
            params: { id },
          }));
    }
   }


export { CustomerAndApartment };
 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Cities } from '../models/Cities';

@Injectable({  providedIn: 'root'})
export class CitiesHttpService extends HttpServiceBase {
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/cities`;
    // return `${this.config.ips.servicePath}/Cities`
  }

  getCities$(): Observable<Cities[]> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getCities',
     }));
   };
 
   getCityById$(id: any): Observable<Cities> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getCityById',
       params: { id },
     }));
   }
   getCityByItem$(item:any): Observable<Cities> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCityByItem',
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
 
   addCity$(cities: Cities) {
 
     return this.post$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'addCity',
       body: cities,
     }));
   }
   updateCity$(id:any,cities:Cities){
    return this.put$(new HttpRequestModel({
        url: this._serverUrl,
        action: 'addCity',
        body: cities,
        params: { id },
      }));
    }
    deleteCity$(id:any){
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteCity',
            params: { id },
          }));
    }
   }

 
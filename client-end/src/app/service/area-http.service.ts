import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Area } from '../models/Area';

@Injectable({  providedIn: 'root'})
export class AreaHttpService extends HttpServiceBase {
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/areas`;
    // return `${this.config.ips.servicePath}/Area`
  }

  getArea$(): Observable<Area[]> {
    console.log('URL:', this._serverUrl);
    
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: '',
     }));
   };
 
   getAreaById$(id: any): Observable<Area> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getAreaById',
       params: { id },
     }));
   }
   getAreaByItem$(item:any): Observable<Area> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getAreaByItem',
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
 
   addArea$(Area: Area) {
 
     return this.post$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'addArea',
       body: Area,
     }));
   }
   updateArea$(id:any,Area:Area){
    return this.put$(new HttpRequestModel({
        url: this._serverUrl,
        action: 'addArea',
        body: Area,
        params: { id },
      }));
    }
    deleteArea$(id:any){
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteArea',
            params: { id },
          }));
    }
   }

 
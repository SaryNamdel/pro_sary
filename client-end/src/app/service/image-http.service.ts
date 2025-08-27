import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Image } from '../models/Image';

@Injectable({  providedIn: 'root'})
export class ImageHttpService extends HttpServiceBase {
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/images`;
    // return `${this.config.ips.servicePath}/Image`
  }

  getImage$(): Observable<Image[]> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: '',
     }));
   };
 
   getImageById$(id: any): Observable<Image> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getImageById',
       params: { id },
     }));
   }
   getImageByItem$(item:any): Observable<Image> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getImageByItem',
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
 
   addImage$(Image: Image) {
 
     return this.post$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'addImage',
       body: Image,
     }));
   }
   updateImage$(id:any,Image:Image){
    return this.put$(new HttpRequestModel({
        url: this._serverUrl,
        action: 'addImage',
        body: Image,
        params: { id },
      }));
    }
    deleteImage$(id:any){
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteImage',
            params: { id },
          }));
    }
   }

 
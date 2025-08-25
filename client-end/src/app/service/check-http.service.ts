import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';

@Injectable({  providedIn: 'root'})
export class CheckHttpService extends HttpServiceBase {
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}checkConnection/`;
  }

  check$(): Observable<boolean> {
   //  return this.http.get<boolean>('http://localhost:3030/checkfolder/checkconnection');
   return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'checkconnection',
    }));
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Renters } from '../models/Renters';

@Injectable({
  providedIn: 'root'
})

export class RentersHttpService extends HttpServiceBase {

  private get _serverUrl(): string {
    // return `${this.config.ips.servicePath}renters/`;
    return `${this.config.ips.servicePath}/api/renters`;
  }

  getRenters$(): Observable<Renters[]> {
   // return this.http.get<Renters[]>('http://localhost:3030/Renterss/getRenterss');
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getRenterss',
    }));
  }

  getRentersById$(id: string): Observable<Renters> {

    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getRentersbyId',
      params: { id },
    }));
  }

  search$(name: string): Observable<boolean> {

    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'search',
      params: { name },
    }));
  }

  createRenters$(Renters: Renters) {

    return this.post$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'createRenters',
      body: Renters,
    }));
  }
}

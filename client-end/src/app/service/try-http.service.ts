import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';


@Injectable({
  providedIn: 'root'
})
export class TryHttpService extends HttpServiceBase {

  constructor(
    protected override http: HttpClient,
    protected override config: ConfigurationService
  ) {
    super(http, config);
  }

  getSomething$(): Observable<any> {
    return this.get$(new HttpRequestModel({
      url: 'your-url-here',
      action: 'getSomething'
    }));
  }
}

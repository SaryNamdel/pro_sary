import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { Customer } from '../models/Customer';

@Injectable({  providedIn: 'root'})
export class CustomerHttpService extends HttpServiceBase {
  
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/customers`;
    // return `${this.config.ips.servicePath}/Customers`
  }

  getCustomers$(): Observable<Customer[]> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getCustomers',
     }));
   };
 
   getCustomerById$(id: any): Observable<Customer> {
     return this.get$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'getCustomerById',
       params: { id },
     }));
   }
   getCustomerByItem$(item:any): Observable<Customer> {
    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCustomerByItem',
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
 
   addCustomer$(Customers: Customer) {
 
     return this.post$(new HttpRequestModel({
       url: this._serverUrl,
       action: 'addCustomer',
       body: Customers,
     }));
   }
   updateCustomer$(id:any,Customers:Customer){
    return this.put$(new HttpRequestModel({
        url: this._serverUrl,
        action: 'addCustomer',
        body: Customers,
        params: { id },
      }));
    }
    deleteCustomer$(id:any){
        return this.delete$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'deleteCustomer',
            params: { id },
          }));
    }
   }

 
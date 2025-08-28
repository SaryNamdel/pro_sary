// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpServiceBase } from './http-service.base';
// import { HttpRequestModel } from '../models/http-request.model';
// import { LoginDto, RegisterDto, Renters } from '../models/Renters';
// import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../environments/environments';


// export interface LoginResponse {
//   rentId: number;
//   username: string;
//   // הוסיפי שדות רלוונטיים ששרת מחזיר
// }



// export interface RenterRegisterPayload {
//   username: string;
//   pwd: string;
//   firstName?: string;
//   lastName?: string;
//   phone?: string;
//   email?: string;
// }

// @Injectable({  providedIn: 'root'})
// export class RentersHttpService extends HttpServiceBase {

//   private get _serverUrl(): string {
//     // return `${this.config.ips.servicePath}renters/`;
//     return `${this.config.ips.servicePath}/api/renters`;
//   }

//   // login(dto: LoginDto): Observable<Renters> {
//   //   return this.http.post<Renters>(`${this._serverUrl}/login`, dto);
//   ///////////////////////



// ////////////////////////////////////////////////



//   // אופציונלי: בדיקת זמינות שם משתמש
//   // isUsernameTaken(username: string): Observable<{ taken: boolean }> {
//   //   return this.http.get<{ taken: boolean }>(`${this._serverUrl}/exists`, { params: { username } });
//   // }

//   // isUsernameTaken(username: string): Observable<{ taken: boolean }> {
//   //   const params = new HttpParams().set('username', username || '');
//   //   return this.http.get<{ taken: boolean }>(`${this._serverUrl}/exists`, { params });
//   // }

//   getRenters$(): Observable<Renters[]> {
//    // return this.http.get<Renters[]>('http://localhost:3030/Renterss/getRenterss');
//     return this.get$(new HttpRequestModel({
//       url: this._serverUrl,
//       action: 'getRenterss',
//     }));
//   }

//   getRentersById$(id: string): Observable<Renters> {

//     return this.get$(new HttpRequestModel({
//       url: this._serverUrl,
//       action: 'getRentersbyId',
//       params: { id },
//     }));
//   }

//   search$(name: string): Observable<boolean> {

//     return this.get$(new HttpRequestModel({
//       url: this._serverUrl,
//       action: 'search',
//       params: { name },
//     }));
//   }

//   createRenters$(Renters: Renters) {

//     return this.post$(new HttpRequestModel({
//       url: this._serverUrl,
//       action: 'createRenters',
//       body: Renters,
//     }));
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { Renters } from '../models/Renters';
import { Apartment } from '../models/Apartment';

export interface LoginResponse {
  rentId: number;
  username: string;
}


@Injectable({ providedIn: 'root' })
export class RentersHttpService {
  private readonly api = environment.apiBase; // למשל 'http://localhost:5000'
  private readonly root = `${this.api}/api/renters`;

  private readonly jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  /** בדיקת שם משתמש */
  isUsernameTaken(username: string): Observable<{ taken: boolean }> {
    const params = new HttpParams().set('username', username ?? '');
    return this.http.get<{ taken: boolean }>(`${this.root}/exists`, { params });
  }

  /** התחברות */
  login(body: { username: string; pwd: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.root}/login`, body, { headers: this.jsonHeaders });
  }

  register(payload: Renters): Observable<any> {
    return this.http.post<any>(`${this.root}/register`, payload, { headers: this.jsonHeaders });
  }

   /** שמירת rentId/username בלוקאל-סטורג' */
   saveAuth(r: LoginResponse) {
    localStorage.setItem('renter.auth', JSON.stringify(r));
  }

  getAuth(): LoginResponse | null {
    const raw = localStorage.getItem('renter.auth');
    return raw ? JSON.parse(raw) : null;
  }

   /** כל דירות המשכיר */
   getMyApartments(rentId: number): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(`${this.root}/${rentId}/apartments`);
  }
}




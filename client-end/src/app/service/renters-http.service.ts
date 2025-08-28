import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../models/http-request.model';
import { LoginDto, RegisterDto, Renters } from '../models/Renters';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environments';


export interface LoginResponse {
  rentId: number;
  username: string;
  // הוסיפי שדות רלוונטיים ששרת מחזיר
}



export interface RenterRegisterPayload {
  username: string;
  pwd: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

@Injectable({  providedIn: 'root'})
export class RentersHttpService extends HttpServiceBase {

  private get _serverUrl(): string {
    // return `${this.config.ips.servicePath}renters/`;
    return `${this.config.ips.servicePath}/api/renters`;
  }

  // login(dto: LoginDto): Observable<Renters> {
  //   return this.http.post<Renters>(`${this._serverUrl}/login`, dto);
  ///////////////////////

  private readonly base = environment.apiBase;                 // ← כאן מתבצע השיוך ל־environment;          // ← בסיס כל נתיבי renters

  private readonly jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // constructor(private http: HttpClient) {}

  /**
   * בדיקה אם שם משתמש תפוס
   * GET /api/renters/exists?username=...
   */
  isUsernameTaken(username: string): Observable<{ taken: boolean }> {
    const params = new HttpParams().set('username', username ?? '');
    return this.http.get<{ taken: boolean }>(`${this._serverUrl}/exists`, { params });
  }

  
  login(body: { username: string; pwd?: string }): Observable<LoginResponse> {
    // אם השרת אצלך תומך גם ב-pwd וגם ב-password – לא צריך שינוי.
    // אם הוא דורש דווקא "password", הפכי כאן:
    const payload = body.pwd ? body : { username: body.username, password: body.pwd ?? '' };
    return this.http.post<LoginResponse>(`${this._serverUrl}/login`, payload, { headers: this.jsonHeaders });
  }

  /**
   * הרשמה/יצירת משכיר חדש
   * POST /api/renters
   */
  register(payload: RenterRegisterPayload): Observable<any> {
    return this.http.post<any>(`${this._serverUrl}`, payload, { headers: this.jsonHeaders });
  }

  /**
   * לחלופין, אם השרת מגדיר את ההרשמה בנתיב /api/renters/register
   * בטלי את המתודה למעלה והשתמשי בזו:
   */
  registerAtRegisterRoute(payload: RenterRegisterPayload): Observable<any> {
    return this.http.post<any>(`${this._serverUrl}/register`, payload, { headers: this.jsonHeaders });
  }
////////////////////////////////////////////////



  // אופציונלי: בדיקת זמינות שם משתמש
  // isUsernameTaken(username: string): Observable<{ taken: boolean }> {
  //   return this.http.get<{ taken: boolean }>(`${this._serverUrl}/exists`, { params: { username } });
  // }

  // isUsernameTaken(username: string): Observable<{ taken: boolean }> {
  //   const params = new HttpParams().set('username', username || '');
  //   return this.http.get<{ taken: boolean }>(`${this._serverUrl}/exists`, { params });
  // }

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



import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SuitableApartmentsService {

  private apartments: any[] = [];

  setApartments(apts: any[]) { this.apartments = apts || []; }

  getApartments(): any[] { return this.apartments; }

  hasApartments(): boolean { return this.apartments.length > 0; }


}


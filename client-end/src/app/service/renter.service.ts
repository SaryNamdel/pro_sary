import { Injectable } from '@angular/core';
import { RenterStatus } from '../statusEnum';

@Injectable({
  providedIn: 'root'
})
export class RenterService {
  stutus = RenterStatus.register
  constructor() { }

  getStatus(): RenterStatus {
    return this.stutus
  }

  setStatus(status: RenterStatus): void {
    this.stutus = status
    
  }
}

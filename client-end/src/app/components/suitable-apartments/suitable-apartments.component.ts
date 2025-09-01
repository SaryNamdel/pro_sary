
import { Component, OnInit } from '@angular/core';
import { SuitableApartmentsService } from '../../service/suitable-apartments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suitable-apartments',
  imports: [CommonModule],
  templateUrl: './suitable-apartments.component.html',
  styleUrls: ['./suitable-apartments.component.scss'] 
})


export class SuitableApartmentsComponent  implements OnInit {

  apartments: any[] = [];

  constructor(private apartmentService: SuitableApartmentsService) {}

  ngOnInit(): void {
    this.apartments = this.apartmentService.getApartments();
    console.log('דירות מתאימות:', this.apartments);
  }
  
  

}

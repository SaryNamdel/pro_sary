import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  router = inject(Router); 

  goToComponent(path:string) {
    this.router.navigate([path]);
 }

 pathImg(p: string) {
  // return '/images/' + p.fullAddress + '.jpg'
  return `/images/home/${p}.jpg`
}
}





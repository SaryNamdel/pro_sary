import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-price',
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

  prices = [100, 200, 300, 400, 500];
  readonly dialog = inject(MatDialog)

  close(): void {
    this.dialog.closeAll()
  }

}


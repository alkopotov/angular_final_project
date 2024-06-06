import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { CartStorageService } from '../../services/cart-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-basket',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './dialog-basket.component.html',
  styleUrl: './dialog-basket.component.css'
})
export class DialogBasketComponent {

  constructor(public dialogRef: DialogRef, public cartStorageService: CartStorageService, private router: Router) { }
  
  emptyImage: string = '/assets/images/dialog-basket/box.png';

  handleStartShopping(): void {
    this.router.navigate(['/catalog']);
    this.dialogRef.close();

  }
}

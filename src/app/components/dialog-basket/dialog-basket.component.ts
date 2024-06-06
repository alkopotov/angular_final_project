import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { CartStorageService } from '../../services/cart-storage.service';
import { Router } from '@angular/router';
import { BasketProductCardComponent } from '../basket-product-card/basket-product-card.component';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { DecimalPipe, registerLocaleData } from '@angular/common';


registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'app-dialog-basket',
  standalone: true,
  imports: [CloseIconComponent, BasketProductCardComponent, DecimalPipe],
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

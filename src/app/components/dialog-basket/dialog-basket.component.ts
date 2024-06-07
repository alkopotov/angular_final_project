import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { CartStorageService } from '../../services/cart-storage.service';
import { Router } from '@angular/router';
import { BasketProductCardComponent } from '../basket-product-card/basket-product-card.component';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { SocialMediaBlockComponent } from '../social-media-block/social-media-block.component';


registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'app-dialog-basket',
  standalone: true,
  imports: [CloseIconComponent, BasketProductCardComponent, DecimalPipe, MatRadioModule, FormsModule, SocialMediaBlockComponent],
  templateUrl: './dialog-basket.component.html',
  styleUrl: './dialog-basket.component.css'
})
export class DialogBasketComponent {

  constructor(public dialogRef: DialogRef, public cartStorageService: CartStorageService, private router: Router) { }
  
  public emptyImage: string = '/assets/images/dialog-basket/box.png';

  public currentDelivery: string = 'Доставка';

  public currentPayment: string = 'Наличными';

  public deliveryOptions: Record<string, number> = {
    'Доставка': 300,
    'Самовывоз': 0
  }

  public paymentOptions: string[] = [
    "Наличными",
    "Картой",
    'Переводом СБП'
  ]

  public get deliveryPrice(): number {
    return this.deliveryOptions[this.currentDelivery] || 0;
  }

  handleStartShopping(): void {
    this.router.navigate(['/catalog']);
    this.dialogRef.close();

  }
}

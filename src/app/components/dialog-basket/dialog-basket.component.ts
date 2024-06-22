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
import { BasketViewedProductsComponent } from '../basket-viewed-products/basket-viewed-products.component';


registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'app-dialog-basket',
  standalone: true,
  imports: [CloseIconComponent, BasketProductCardComponent, DecimalPipe, MatRadioModule, FormsModule, SocialMediaBlockComponent, BasketViewedProductsComponent],
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

  public pickupLocations: string[] = [
    "Москва, Дубининская ул., 96",
    "Москва, пр-т Мира, 119, стр. 332",
    "С.-Петербург, Лиговский пр-n, 10/118"
  ]

  public paymentOptions: string[] = [
    "Наличными",
    "Картой",
    'Переводом СБП'
  ]

  public get deliveryPrice(): number {
    return this.deliveryOptions[this.currentDelivery] || 0;
  }

  public handleStartShopping(): void {
    this.router.navigate(['/products/category/2']);
    this.dialogRef.close();
  }

  public handleViewedItemClick(id: number): void {
    this.router.navigate(['/products', id]);
    this.dialogRef.close();
  }
}

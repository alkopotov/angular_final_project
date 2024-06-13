import { Component, Input } from '@angular/core';
import { CartStorageService, ProductInCart } from '../../services/cart-storage.service';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { ProductNamePipe } from '../../pipes/product-name.pipe';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { ProductsWorkerService } from '../../services/products-worker.service';

registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'app-basket-product-card',
  standalone: true,
  imports: [DecimalPipe, ProductNamePipe, CloseIconComponent],
  templateUrl: './basket-product-card.component.html',
  styleUrl: './basket-product-card.component.css'
})
export class BasketProductCardComponent {

  constructor(private cartStorageService: CartStorageService, public productService: ProductsWorkerService) { }

  @Input() product: ProductInCart;

  public handleCloseProduct(): void {
    this.cartStorageService.deleteFromCart(this.product.product.id);
  }

  public handleIncrement(): void {
    this.cartStorageService.saveToCart(this.product.product.id, 1);
  }

  public handleDecrement(): void {
    this.cartStorageService.saveToCart(this.product.product.id, -1);
  }
}

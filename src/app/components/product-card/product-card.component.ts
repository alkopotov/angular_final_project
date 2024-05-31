import { Component, Input, inject } from '@angular/core';
import { Product } from '../../services/products-worker.service';
import { HeartIconComponent } from '../svg_components/heart-icon/heart-icon.component';
import { RatingComponent } from '../rating/rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { CartPlusIconComponent } from '../svg_components/cart-plus-icon/cart-plus-icon.component';
import { RouterLink } from '@angular/router';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';


registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [HeartIconComponent, RatingComponent, FontAwesomeModule, DecimalPipe, CartPlusIconComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product: Product;

  faCircle = faCircle;

  public dialogService = inject(DialogDispatcherService);

  public getDescription(): string {
    let memory = this.product.characteristics.find((characteristic) => characteristic.characteristic === 'Объем встроенной памяти');
    if (memory) {
      return memory.value + ' ГБ ' + this.product.color.toLowerCase();
    } else {
      return this.product.color.toLowerCase();
    }
  }
}

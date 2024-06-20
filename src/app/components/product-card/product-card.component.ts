import { Component, Input, inject } from '@angular/core';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
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
import { CartStorageService } from '../../services/cart-storage.service';
import { CartInIconComponent } from '../svg_components/cart-in-icon/cart-in-icon.component';
import { ProductNamePipe } from '../../pipes/product-name.pipe';
import { FavoritesStorageService } from '../../services/favorites-storage.service';


registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [HeartIconComponent, RatingComponent, FontAwesomeModule, DecimalPipe, CartPlusIconComponent, RouterLink, CartInIconComponent, ProductNamePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  constructor(
    public cartStorageService: CartStorageService,
    public productService: ProductsWorkerService,
    public favoritesStorage: FavoritesStorageService) { }

  @Input() product: Product;

  faCircle = faCircle;

  public dialogService = inject(DialogDispatcherService);

  public handleOpenCredit(): void {
    this.dialogService.setDialogCreditProductId(this.product.id);
    this.dialogService.openDialog('credit');
  }

  public handleOpenInormAvailable(): void {
    this.dialogService.setDialogCreditProductId(this.product.id);
    this.dialogService.openDialog('informAvailable');
    
  }
  public handleAddToCart(): void {  
    this.cartStorageService.saveToCart(this.product.id, 1);
    this.dialogService.setDialogCreditProductId(this.product.id);
    this.dialogService.openDialog('productAddedToBasket');
  }

  public handleAddToFavorites(): void {
    this.favoritesStorage.handleFavorites(this.product.id);
  }

  public handleOpenOneClickOrder(): void {
    this.dialogService.setDialogCreditProductId(this.product.id);
    this.dialogService.openDialog('oneClick');
  }
}


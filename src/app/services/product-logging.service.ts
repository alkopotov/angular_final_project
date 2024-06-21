import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from './products-worker.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductLoggingService {
  private viewedProductsKey = 'viewedProducts';
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object,) {}

  logViewedProduct(product: Product): void {
    let viewedProducts = this.getViewedProducts();
    if (!viewedProducts.find(p => p.id === product.id)) {
      viewedProducts.push(product);
      if(isPlatformBrowser(this.platformId)){
        localStorage.setItem(this.viewedProductsKey, JSON.stringify(viewedProducts));
      }
      
    }
  }

  getViewedProducts(): Product[] {
    if(isPlatformBrowser(this.platformId)){
      const viewedProductsJson = localStorage.getItem(this.viewedProductsKey);
      return viewedProductsJson ? JSON.parse(viewedProductsJson) : [];
    }
    return []
  } 
}

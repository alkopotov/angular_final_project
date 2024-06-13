import { Injectable } from '@angular/core';
import { Product } from './products-worker.service';

@Injectable({
  providedIn: 'root'
})
export class ProductLoggingService {
  private viewedProductsKey = 'viewedProducts';
  
  constructor() {}

  logViewedProduct(product: Product): void {
    let viewedProducts = this.getViewedProducts();
    if (!viewedProducts.find(p => p.id === product.id)) {
      viewedProducts.push(product);
      localStorage.setItem(this.viewedProductsKey, JSON.stringify(viewedProducts));
    }
  }

  getViewedProducts(): Product[] {
    const viewedProductsJson = localStorage.getItem(this.viewedProductsKey);
    return viewedProductsJson ? JSON.parse(viewedProductsJson) : [];
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { ProductLoggingService } from './product-logging.service';

export interface Product { 
  id: number;
  createdAt: string,
  name: string,
  price: number,
  discount_price: number,
  guarantee: number,
  rating: number, 
  count_review: number,
  is_available: boolean,
  store_address: string,
  color: string,
  brand: string,
  country: string,
  category_id: number,
  category:  string, 
  images: string[],
  product_type_id: number,
  product_types: [],
  characteristics: Characteristics[], 
}

export interface Images {
  id: number, 
  products: Product,
  products_id: number,
  image_link: string,
}

 
export interface Categories {
  id: number,
  name: string,
  products: Product[],
}

export interface UniqueCategory {
  id: number;
  name: string;
}

export interface Characteristics{
  characteristic: string,
  unit_type: string,
  value: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsWorkerService {
  public baseUrl = 'https://angular-final-project-backend.onrender.com';
  public products: Product[] = [];
  public searchQuery: string = ''
  public priceVal = 0
  public maxPrice = 0
  public categories = [
    { "id": 1, "name": "Акссесуары" },
    { "id": 2, "name": "Смартфоны" },
    { "id": 3, "name": "Компьютеры" },
    { "id": 4, "name": "Планшеты" },
    { "id": 5, "name": "Часы" },
    { "id": 6, "name": "Наушники" }
  ]
  public forPopup: Product[] = [];
  public filteredProducts: Product[] = [];
  public categoryForPopup = new BehaviorSubject<number>(2);



  constructor(private http: HttpClient, private logging: ProductLoggingService) { }

  getApiUrl(): string {
    return this.baseUrl
  }


  public get mostPopularProducts(): Product[] {
    return this.products.sort((a, b) => b.count_review - a.count_review).slice(0, 12);
  }


  public getProducts(): void {
    this.http.get<Product[]>(`${this.baseUrl}/api/products/`).subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
      
    });
  }



  public getProductCategory(numCat: number): void {
    this.http.get<Product[]>(`${this.baseUrl}/api/category/${numCat}`).subscribe((products) => {
      this.filteredProducts = products;
    });
  }

  public forPopupProducts(numCat: number) {
    this.http.get<Product[]>(`${this.baseUrl}/api/category/${numCat}`).subscribe((products) => {
      this.forPopup = products.slice(0, 12);
    });
  }
  
  public setCategoryForPopup(id: number) {
    this.categoryForPopup.next(id);
  }

  getOneProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/api/products/${id}`).pipe(
      tap(product => this.logging.logViewedProduct(product))
    );
  }

  computeMaxPrice(): void {
    this.maxPrice = 0;
    this.products.forEach(product => {
      if (product.price > this.maxPrice) {
        this.maxPrice = product.price; 
      }
    });
  }

  computedProducts(): Product[] {
    let value = this.searchQuery.toLowerCase();
    if (this.priceVal == 0) {
      return this.filteredProducts.filter(el => el.name.toLowerCase().includes(value));
    } else {
      return this.filteredProducts.filter(el => el.name.toLowerCase().includes(value))
        .filter(el => el.price <= this.priceVal);
    }
  }
}

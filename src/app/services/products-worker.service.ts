import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';

export interface Product { 
  id: number;
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
  category:  Categories | null, 
  images: string[],
  product_type_id: number,
  product_types: [],
  charateristics: Characteristics[], 
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


export interface Characteristics{
  charateristic: string,
  unit_type: string,
  value: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsWorkerService {
  public baseUrl = 'http://localhost:1452';
  public products: Product[] = [];
  public searchQuery: string = ''
  public priceVal = 0
  public maxPrice = 0




  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return this.baseUrl
  }

  public getProducts() :void {
    fetch(`${this.baseUrl}/api/products/`)
      .then((res) => res.json())
      .then(data => this.products = data)
      .then(() => {
        this.maxPrice = Math.max(...this.products.map(product => product.price));
        console.log(this.maxPrice);
      });
      console.log(this.maxPrice);
      
  }

  public products$: Observable<Product[]>;

  // getProducts(): void {
  //   this.products$ = this.http.get<Product[]>(`${this.baseUrl}/products/`);
  // }

  getOneProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/api/products/${id}`)
  }


  computedProducts(): Product[] {
    let value = this.searchQuery.toLowerCase()
    if (this.priceVal == 0 ){
      return this.products.filter(el => el.name.toLowerCase().includes(value))
    }
    else {
      return this.products.filter(el => el.name.toLowerCase().includes(value))
      .filter(el => el.price <= this.priceVal)
    }
  }

  // public computedProducts(): Product[] {
  //   let value = this.searchQuery.toLowerCase();
  //   if (this.priceVal == 0) {
  //     return this.products.filter(el => el.name.toLowerCase().includes(value));
  //   } else {
  //     return this.products.filter(el => el.name.toLowerCase().includes(value))
  //       .filter(el => el.price <= this.priceVal);
  //   }
  // }

}

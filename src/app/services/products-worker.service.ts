import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  category:  string, 
  images: string[],
  product_type_id: number,
  product_types: [],
  characteristics: Characteristic[],
}

export interface Characteristic {
  characteristic: string;
  unit_type: string;
  value: string;
}

export interface Images {
  id: number, 
  products: Product,
  products_id: number
  image_link: string
}


export interface Categories {
  id: number
  name: string
  products: Product[]
}


@Injectable({
  providedIn: 'root'
})
export class ProductsWorkerService {
  private baseUrl = 'http://localhost:1452/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/`)
  }
  getOneProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
  }

}

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  public productsInCart: Record<any, number> = {};

  // Универсальный метод, изменяющий число продуктов в корзине по заданному id.
  // Счетчик уже хранящихся товаров увеличивает на переданное значение, для новых товаров - добавляет
  // При значении счетчика после обновления меньше 1 удаляет продукт из корзины
  public saveToCart(id: number, number: number): void {
    if (isPlatformBrowser(this.platformId)) {
      let products = JSON.parse(localStorage.getItem('cart') as string) || {};
      if (this.hasProductWithId(id)) {
        if (this.productsInCart[`${id}`] + number <= 0) {
          delete this.productsInCart[`${id}`];
        } else {
          this.productsInCart[`${id}`] += number;
        }
      } else {
        this.productsInCart[`${id}`] = number;
      }
      localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    }
  }

  // Проверяет наличие продукта в корзине по заданному id
  public hasProductWithId(id: number): boolean {
    if (isPlatformBrowser(this.platformId)) {
      // let products = JSON.parse(localStorage.getItem('cart') as string) || {};
      return Object.keys(this.productsInCart).includes(`${id}`);
    }
    return false;
  }

  // Удаляет продукт из корзины по заданному id
  public deleteFromCart(id: number): void {
    if (isPlatformBrowser(this.platformId)) {
      let products = JSON.parse(localStorage.getItem('cart') as string) || {};
      delete products[`${id}`];
      localStorage.setItem('cart', JSON.stringify(products));
      this.productsInCart = products;
    }
  }

  // Возвращает количество товарных позиции в корзине
  public get productsCount(): number {
    if (isPlatformBrowser(this.platformId)) {
      // let products = JSON.parse(localStorage.getItem('cart') as string) || {};
      return Object.keys(this.productsInCart).length;
    }
    return 0;
  }

 // Возвращает количество единиц товаров в корзине по заданному id
  public get itemsCount(): number {
    if (isPlatformBrowser(this.platformId)) {
      // let products = JSON.parse(localStorage.getItem('cart') as string) || {};
      return Object.keys(this.productsInCart).reduce((acc, id) => acc + this.productsInCart[`${id}`], 0);
    }
    return 0;
  }

  // Считывает из localStorage в productsInCart информацию о продуктах в корзине
  public getProductsInCartStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.productsInCart = JSON.parse(localStorage.getItem('cart') as string) || {};
    }
  }
}

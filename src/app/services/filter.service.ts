import { Injectable } from '@angular/core';
import { Product, ProductsWorkerService } from './products-worker.service';


export type ProductFilter = 'Процессор' | 'Объем встроенной памяти' | 'Диагональ' | 'Циферблат'

export type ProductCategory = 'Аксессуары' | 'Смартфоны' | 'Планшеты' | 'Компьютеры' | 'Часы' | 'Гаджеты'

export type FilterCategory = {
  name: ProductFilter,
  values: any[],
  unit: string
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private productService: ProductsWorkerService) { }

  private _currentCategory: number = 1;

  public set currentCategory(id: number) {
    this._currentCategory = id
  }

  public get currentCategoryTitle(): ProductCategory {
    return this.productCategories[this._currentCategory]
  }

  public productCategories: Record<number, ProductCategory> = {
    1: 'Аксессуары',
    2: 'Смартфоны',
    3: 'Компьютеры',
    4: 'Планшеты',
    5: 'Часы',
    6: 'Гаджеты'
  }

  public categoryFilters: Record<number, ProductFilter[]> = {
    1: [],
    2: ['Процессор', 'Объем встроенной памяти', 'Диагональ'],
    3: ['Процессор', 'Объем встроенной памяти'],
    4: ['Объем встроенной памяти', 'Диагональ'],
    5: ['Процессор', 'Циферблат'],
    6: []
  }

  public minPrice: number;
  public maxPrice: number;


// Для реализации фильтрации по выбранному chip 
  private _currentChip: string | null = null;

  public set currentChip(chip: string | null) {
    this._currentChip = chip
  }

  public get productsInCategory(): Product[] {
    return this.productService.products.filter(el => el.category === this.productCategories[this._currentCategory])
  }

  public get minRangeValue(): number {
    return Math.min(...this.productsInCategory.map(el => el.discount_price || el.price))
  }

  public get maxRangeValue(): number {
    return Math.max(...this.productsInCategory.map(el => el.discount_price || el.price))
  }

  public get chipsInCategory(): string[] {

    let result = new Set;
    this.productsInCategory.forEach(product => {
      result.add(product.name);
    })
    return Array.from(result) as string[];
  }


  public get categoryFilterValues(): FilterCategory[] {

    let result: FilterCategory[] = [];
    let filters = this.categoryFilters[this._currentCategory]
    for (let filter of filters) {
      let values = new Set;
      let units = new Set;
      this.productsInCategory.forEach(product => {
        let characteristic = product.characteristics.find(el => el.characteristic === filter)
        if (characteristic) {
          values.add(characteristic.value)
          units.add(characteristic.unit_type)
        }
      })
      result.push({ name: filter, values: Array.from(values), unit: Array.from(units)[0] as string })
    }
    console.log(result);

    return result
  }

  public get displayedProducts(): Product[] {

    console.log(this._currentChip);

    let result = this.productsInCategory.filter(el => el.price >= this.minPrice && el.price <= this.maxPrice)
    if (this._currentChip) {
      result = result.filter(el => el.name === this._currentChip)
    }
    return result
  }
}


import { Injectable } from '@angular/core';
import { Product, ProductsWorkerService } from './products-worker.service';


export type ProductFilter = 'Процессор' | 'Объем встроенной памяти' | 'Диагональ' | 'Циферблат'

export type ProductCategory = 'Аксессуары' | 'Смартфоны' | 'Планшеты' | 'Компьютеры' | 'Часы' | 'Гаджеты'

export type FilterCategory = {
  category: number,
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

  public get currentChip(): string | null {
    return this._currentChip
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


  private _checkboxesSelected: Record<string, string[]> = {};

  public get checkboxesSelected(): Record<string, string[]> {
    return this._checkboxesSelected
  }

  public addCheckbox(filterName: string, filterValue: string): void {
    if (!this._checkboxesSelected[filterName]) {
      this._checkboxesSelected[filterName] = [];
    }
    this._checkboxesSelected[filterName].push(filterValue);
  }

  public removeCheckbox(filterName: string, filterValue: string): void {
    this._checkboxesSelected[filterName] = this._checkboxesSelected[filterName].filter(el => el !== filterValue);
  }

  public clearCheckboxes(): void {
    this._checkboxesSelected = {};
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
          if (isNaN(+characteristic.value)) {
            values.add(characteristic.value)
          } else {
            values.add(+characteristic.value)
          }
          units.add(characteristic.unit_type)
        }
      })
      result.push({
        category: this._currentCategory,
        name: filter,
        values: Array.from(values).sort((a: any, b: any) => a > b ? 1 : -1).map(el => `${el}`),
        unit: Array.from(units)[0] as string
      })
    }
    console.log(result);
    return result
  }

  // Логика фильтрации
  public get displayedProducts(): Product[] {
    let result = this.productsInCategory.filter(el => {
      let currentPrice = el.discount_price || el.price
      return currentPrice >= this.minPrice && currentPrice <= this.maxPrice
    })
    if (this._currentChip) {
      result = result.filter(el => el.name === this._currentChip)
    }
    for (let filter in this._checkboxesSelected) {
      if (this._checkboxesSelected[filter].length > 0) {
        result = result.filter(el => {
          let characteristic = el.characteristics.find(el => el.characteristic === filter)
          if (characteristic) {
            return this._checkboxesSelected[filter].includes(characteristic.value)
          } else {
            return false
          }
        })
      }
    }
    return result
  }
}


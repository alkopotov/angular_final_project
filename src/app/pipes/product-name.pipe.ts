import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/products-worker.service';

@Pipe({
  name: 'productName',
  standalone: true
})
export class ProductNamePipe implements PipeTransform {

  transform(value: Product, ...args: unknown[]): string {
    let name: string = value.name.toLowerCase().includes(value.brand.toLowerCase()) ? value.name : `${value.brand} ${value.name}`;
    switch (value.category) {
      case 'Смартфоны' || 'Планшеты':
        let memory = value.characteristics.find((characteristic) => characteristic.characteristic === 'Объем встроенной памяти');
        if (memory) {
          return `${name}, ${memory.value} ${memory.unit_type} ${value.color.toLowerCase()}`;
        } else {
          return `${name} ${value.color.toLowerCase()}`;
        };
      default:
        return `${name} ${value.color.toLowerCase() !== 'none' ? value.color.toLowerCase(): ''}`;
    }
  }
}

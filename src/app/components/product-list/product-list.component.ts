import { Component, Input } from '@angular/core';
import { Product } from '../../services/products-worker.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[];
  @Input() title: string;


  public numberOnPage: number = 15;

  public currentPage: number = 1;

  public get numberOfPages(): number {
    return Math.ceil(this.products.length / this.numberOnPage);
  }

  public get paginationButtons(): number[] {
    return Array(this.numberOfPages).fill(0).map((x, i) => i + 1);
  }

  public get productsOnPage(): Product[] {
    if (this.numberOfPages === 1) this.currentPage = 1;
    if (this.currentPage > this.numberOfPages) this.currentPage = this.numberOfPages;
    return this.products.slice((this.currentPage - 1) * this.numberOnPage, this.currentPage * this.numberOnPage);
  }

}

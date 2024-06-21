import { Component, OnInit } from '@angular/core';
import { ProductLoggingService } from '../../services/product-logging.service';
import { Product } from '../../services/products-worker.service';

@Component({
  selector: 'app-viewed-products-test',
  standalone: true,
  imports: [],
  templateUrl: './viewed-products-test.component.html',
  styleUrl: './viewed-products-test.component.css'
})
export class ViewedProductsTestComponent implements OnInit{
  viewedProducts: Product[] = [];

  constructor(private logging: ProductLoggingService) { }

  ngOnInit(): void {
    this.viewedProducts = this.logging.getViewedProducts();
  }
}
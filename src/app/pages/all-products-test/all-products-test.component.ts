import { Component, OnInit } from '@angular/core';
import { ProductsWorkerService } from '../../services/products-worker.service';
import { Product } from '../../services/products-worker.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-products-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-products-test.component.html',
  styleUrl: './all-products-test.component.css'
})
export class AllProductsTestComponent implements OnInit {
  public baseUrl = 'http://localhost:1452/';
  // public searchQuery = '';

  public searchResults: Product[] = [];
  public selectedCategoryId: number | null = null;

  
  constructor(public productService: ProductsWorkerService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts();
  }

  onCategoryChange(): void {
    if (this.selectedCategoryId !== null) {
      this.productService.getProductCategory(this.selectedCategoryId);
    }
  }
  onSearchInputChange(): void {
    this.searchResults = this.productService.computedProducts();
  }

  goToProductCard(id: number): void {
    this.router.navigate(['/test_all', id]);
  }
}
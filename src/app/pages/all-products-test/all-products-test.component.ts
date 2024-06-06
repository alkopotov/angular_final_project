import { Component, OnInit } from '@angular/core';
import { ProductsWorkerService } from '../../services/products-worker.service';
import { Product } from '../../services/products-worker.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AsyncPipe } from '@angular/common';




@Component({
  selector: 'app-all-products-test',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './all-products-test.component.html',
  styleUrl: './all-products-test.component.css'
})
export class AllProductsTestComponent implements OnInit {
  public baseUrl = 'http://localhost:1452/'
  constructor(public productService: ProductsWorkerService, private router: Router ){}
  ngOnInit(): void {
    this.productService.getProducts()
  }
  goToProductCard(id: number) {
    this.router.navigate(['/test_all', id]);
  }
}

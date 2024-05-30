import { Component, OnInit } from '@angular/core';
import { ProductsWorkerService } from '../../services/products-worker.service';
import { Product } from '../../services/products-worker.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-all-products-test',
  standalone: true,
  imports: [],
  templateUrl: './all-products-test.component.html',
  styleUrl: './all-products-test.component.css'
})
export class AllProductsTestComponent implements OnInit {
  products: Product[] = []
  public baseUrl = 'http://localhost:1452/'

  constructor(private productService: ProductsWorkerService, private router: Router ){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) =>{
      this.products = products
    })
  }

  goToProductCard(id: number) {
    this.router.navigate(['/test_all', id]);
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsWorkerService } from '../../services/products-worker.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-catalog-search-bar',
  standalone: true,
  imports: [FormsModule, SlicePipe],
  templateUrl: './catalog-search-bar.component.html',
  styleUrl: './catalog-search-bar.component.css'
})
export class CatalogSearchBarComponent implements OnInit{
  @Input() public classModded: string;
  // @Input() description: string;

  public baseUrl = 'http://localhost:1452/'
  public showList = false;

  constructor(public productService: ProductsWorkerService, private router: Router ){}
  ngOnInit(): void {
    this.productService.getProducts()
  }

  hideListOnBlur(): void {
    setTimeout(() => {
      this.showList = false;
    }, 200);
  }

  goToProductCard(id: number) {
    this.router.navigate(['/test_all', id]);
  }
  
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ProductLoggingService } from '../../services/product-logging.service';
import { ProductNamePipe } from '../../pipes/product-name.pipe';
import { ProductsWorkerService } from '../../services/products-worker.service';

@Component({
  selector: 'app-basket-viewed-products',
  standalone: true,
  imports: [ProductNamePipe],
  templateUrl: './basket-viewed-products.component.html',
  styleUrl: './basket-viewed-products.component.css'
})
export class BasketViewedProductsComponent {

  @Output() public handleViewedItemClick: EventEmitter<any> = new EventEmitter();

  constructor(
    public productLoggingService: ProductLoggingService,
    public productService: ProductsWorkerService
  ) { }

  public openViewedProduct(id: number): void {
    this.handleViewedItemClick.emit(id);
  }
}

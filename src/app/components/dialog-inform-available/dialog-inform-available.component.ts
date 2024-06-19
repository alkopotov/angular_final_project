import { Component, OnInit } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { DialogRef } from '@angular/cdk/dialog';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { ProductNamePipe } from '../../pipes/product-name.pipe';

@Component({
  selector: 'app-dialog-inform-available',
  standalone: true,
  imports: [CloseIconComponent, ProductNamePipe],
  templateUrl: './dialog-inform-available.component.html',
  styleUrl: './dialog-inform-available.component.css'
})
export class DialogInformAvailableComponent implements OnInit{

  constructor(
    public dialogRef: DialogRef,
    public dialogDispatcherService: DialogDispatcherService,
    public productService: ProductsWorkerService
  ) { }

  public product: Product;

  ngOnInit(): void {
    this.productService.getOneProduct(this.dialogDispatcherService.dialogCreditProductId).subscribe((product: Product) => {
      this.product = product;
    })
  }
}

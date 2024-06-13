import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { Router } from '@angular/router';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { ProductNamePipe } from '../../pipes/product-name.pipe';
import { SocialMediaBlockComponent } from '../social-media-block/social-media-block.component';

@Component({
  selector: 'app-dialog-product-added',
  standalone: true,
  imports: [CloseIconComponent, ProductNamePipe, SocialMediaBlockComponent],
  templateUrl: './dialog-product-added.component.html',
  styleUrl: './dialog-product-added.component.css'
})
export class DialogProductAddedComponent implements OnInit{

  constructor(
    public dialogRef: DialogRef,
    public dialogDispatcherService: DialogDispatcherService,
    public productService: ProductsWorkerService,
    private router: Router
  ) { }

    public product: Product;
  ngOnInit(): void {
    this.productService.getOneProduct(this.dialogDispatcherService.dialogCreditProductId).subscribe((product: Product) => {
      this.product = product;
    });
  }

  public handleClose(): void {
    this.dialogRef.close();
  }

  public handleOrderCheckout(): void {
    this.dialogRef.close();
    this.dialogDispatcherService.openDialog('basket');
  }

  public handleContinueShopping(): void {
    this.dialogRef.close();
    this.router.navigate(['/catalog']);
  }
}

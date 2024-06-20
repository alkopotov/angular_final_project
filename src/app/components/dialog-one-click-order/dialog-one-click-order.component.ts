import { Component, OnInit } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { ProductNamePipe } from '../../pipes/product-name.pipe';
import { DialogRef } from '@angular/cdk/dialog';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { SocialMediaBlockComponent } from '../social-media-block/social-media-block.component';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { DecimalPipe, registerLocaleData } from '@angular/common';

registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
@Component({
  selector: 'app-dialog-one-click-order',
  standalone: true,
  imports: [CloseIconComponent, ProductNamePipe, SocialMediaBlockComponent, DecimalPipe],
  templateUrl: './dialog-one-click-order.component.html',
  styleUrl: './dialog-one-click-order.component.css'
})
export class DialogOneClickOrderComponent implements OnInit{

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

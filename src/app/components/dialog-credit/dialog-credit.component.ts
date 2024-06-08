import { Component, OnInit } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { DialogRef } from '@angular/cdk/dialog';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { ProductNamePipe } from '../../pipes/product-name.pipe';

registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'app-dialog-credit',
  standalone: true,
  imports: [CloseIconComponent, DecimalPipe, FormsModule, MatSliderModule, ProductNamePipe],
  templateUrl: './dialog-credit.component.html',
  styleUrl: './dialog-credit.component.css'
})
export class DialogCreditComponent implements OnInit{

  constructor(
    public dialogRef: DialogRef,
    public dialogDispatcherService: DialogDispatcherService,
    public productService: ProductsWorkerService
  ) { }

  public product: Product;

  public banks: any[] = [
    {
      title: 'Сбербанк',
      interestRate: 17.7
    },
    {
      title: 'Альфа-банк',
      interestRate: 17.0
    },
    {
      title: 'Тинькофф Банк',
      interestRate: 16.5
    },
    {
      title: 'Газпромбанк',
      interestRate: 17.3
    }
  ]

  public creditTerm: number = 6;

  public interestRate: string = '18'

  

  public get monthlyPayment(): number {
    return this.finalPrice * (+this.interestRate / 100 / 12) * ((1 + +this.interestRate /100 / 12 ) ** this.creditTerm) / ((1 + +this.interestRate / 100 / 12) ** this.creditTerm - 1);
  }

    public get finalPrice(): number {
    return this.product.discount_price || this.product.price;
  }

  public sliderParams: any = {
    min: 2,
    max: 36,
    step: 1,
    value: 6,
    showTicks: false,
    thumbLabel: true,
  }

  ngOnInit(): void {
    this.productService.getOneProduct(this.dialogDispatcherService.dialogCreditProductId).subscribe((product: any) => {
      this.product = product;
    })
  }
}

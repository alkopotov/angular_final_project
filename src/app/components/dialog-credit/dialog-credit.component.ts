import { Component } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { DialogRef } from '@angular/cdk/dialog';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-credit',
  standalone: true,
  imports: [CloseIconComponent, DecimalPipe, FormsModule],
  templateUrl: './dialog-credit.component.html',
  styleUrl: './dialog-credit.component.css'
})
export class DialogCreditComponent {

  constructor(public dialogRef: DialogRef) { }

  public product: any = {
    title: 'iPhone 14 Pro Max 128GB Green',
    price: 137900,
    discountPercentage: 6,
    image: '/assets/tmp/iphone_for_dialog_credit.png'
  }

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
    return this.product.price * (1 - this.product.discountPercentage / 100);
  }


}

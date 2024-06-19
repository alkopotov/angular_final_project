import { Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DialogCallbackComponent } from '../components/dialog-callback/dialog-callback.component';
import { DialogBasketComponent } from '../components/dialog-basket/dialog-basket.component';
import { DialogCreditComponent } from '../components/dialog-credit/dialog-credit.component';
import { DialogProductAddedComponent } from '../components/dialog-product-added/dialog-product-added.component';
import { DialogFilterElemComponent } from '../components/dialog-filter-elem/dialog-filter-elem.component';
import { DialogTradeInComponent } from '../components/dialog-trade-in/dialog-trade-in.component';
import { DialogInformAvailableComponent } from '../components/dialog-inform-available/dialog-inform-available.component';


export type DialogWindowType = 'basket' | 'credit' | 'callback' | 'catalog'  | 'oneClick' | 'cheaperForm' | 'productAddedToBasket' | 'filterElem' | 'tradeIn' | 'informAvailable';


@Injectable({
  providedIn: 'root'
})

export class DialogDispatcherService {

  constructor(public dialog: Dialog) { }

  public dialogWindows: Record<DialogWindowType, any> = {
    basket: DialogBasketComponent,
    credit: DialogCreditComponent,
    callback: DialogCallbackComponent,
    catalog: null,
    oneClick: null,
    cheaperForm: null,
    productAddedToBasket: DialogProductAddedComponent,
    filterElem: DialogFilterElemComponent,
    tradeIn: DialogTradeInComponent,
    informAvailable: DialogInformAvailableComponent,
  }

  private _dialogCreditProductId: number = 1;

  public setDialogCreditProductId(id: number): void {
    this._dialogCreditProductId = id;
  }

  public get dialogCreditProductId(): number {
    return this._dialogCreditProductId;
  }
  
  public openDialog(dialogWindowType: DialogWindowType): void {
    if (this.dialogWindows[dialogWindowType]) {
      this.dialog.open(this.dialogWindows[dialogWindowType], { 
        disableClose: true
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DialogCallbackComponent } from '../components/dialog-callback/dialog-callback.component';
import { DialogBasketComponent } from '../components/dialog-basket/dialog-basket.component';
import { DialogCreditComponent } from '../components/dialog-credit/dialog-credit.component';


export type DialogWindowType = 'basket' | 'credit' | 'callback' | 'catalog' | 'addToCart' | 'oneClick' | 'cheaperForm';


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
    addToCart: null,
    oneClick: null,
    cheaperForm: null
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

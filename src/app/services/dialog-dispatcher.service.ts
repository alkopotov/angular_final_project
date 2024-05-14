import { Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DialogCallbackComponent } from '../components/dialog-callback/dialog-callback.component';
import { DialogBasketComponent } from '../components/dialog-basket/dialog-basket.component';


export type DialogWindowType = 'basket' | 'credit' | 'callback' | 'catalog' | 'addToCart' | 'oneClick';


@Injectable({
  providedIn: 'root'
})



export class DialogDispatcherService {

  constructor(public dialog: Dialog) { }

  public dialogWindows: Record<DialogWindowType, any> = {
    basket: DialogBasketComponent,
    credit: null,
    callback: DialogCallbackComponent,
    catalog: null,
    addToCart: null,
    oneClick: null
  }
  
  public openDialog(dialogWindowType: DialogWindowType): void {
    if (this.dialogWindows[dialogWindowType]) {
      this.dialog.open(this.dialogWindows[dialogWindowType], { 
        disableClose: true
      });
    }
  }
}

import { Component, Input } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-trade-in',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './dialog-trade-in.component.html',
  styleUrl: './dialog-trade-in.component.css'
})
export class DialogTradeInComponent {


  constructor(public dialogRef: DialogRef) { }

  public handleClose(): void {
    this.dialogRef.close();
  }

}

import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';

@Component({
  selector: 'app-dialog-cheaper-form',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './dialog-cheaper-form.component.html',
  styleUrl: './dialog-cheaper-form.component.css'
})
export class DialogCheaperFormComponent {


  constructor(public dialogRef: DialogRef) { }


  public handleClose(): void {
    this.dialogRef.close();
  }
}

import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-callback',
  standalone: true,
  imports: [],
  templateUrl: './dialog-callback.component.html',
  styleUrl: './dialog-callback.component.css'
})
export class DialogCallbackComponent {

  constructor(public dialogRef: DialogRef) { }

}

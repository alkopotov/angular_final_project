import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-basket',
  standalone: true,
  imports: [],
  templateUrl: './dialog-basket.component.html',
  styleUrl: './dialog-basket.component.css'
})
export class DialogBasketComponent {

  constructor(public dialogRef: DialogRef) { }

}

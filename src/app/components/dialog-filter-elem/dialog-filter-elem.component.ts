import { Component } from '@angular/core';
import { FilterElemComponent } from '../filter-elem/filter-elem.component';
import { CloseIconComponent } from '../svg_components/close-icon/close-icon.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-filter-elem',
  standalone: true,
  imports: [FilterElemComponent, CloseIconComponent],
  templateUrl: './dialog-filter-elem.component.html',
  styleUrl: './dialog-filter-elem.component.css'
})
export class DialogFilterElemComponent {

  constructor(public dialogRef: DialogRef) { }

}

import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-warranty-accordion-component',
  standalone: true,
  imports: [CdkAccordionModule],
  templateUrl: './warranty-accordion-component.component.html',
  styleUrl: './warranty-accordion-component.component.css'
})
export class WarrantyAccordionComponentComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  expandedIndex = 0;
}

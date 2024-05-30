import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { WarrantyAccordionComponentComponent } from '../../components/warranty-accordion-component/warranty-accordion-component.component';
import { WarrantyTextComponentComponent } from '../../components/warranty-text-component/warranty-text-component.component';

@Component({
  selector: 'app-warranty-page',
  standalone: true,
  imports: [CdkAccordionModule, WarrantyAccordionComponentComponent, WarrantyTextComponentComponent],
  templateUrl: './warranty-page.component.html',
  styleUrl: './warranty-page.component.css'
})
export class WarrantyPageComponent {

}

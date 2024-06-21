import { Component } from '@angular/core';
import { SubwayPointComponent } from '../subway-point/subway-point.component';

@Component({
  selector: 'app-product-receiving',
  standalone: true,
  imports: [SubwayPointComponent],
  templateUrl: './product-receiving.component.html',
  styleUrl: './product-receiving.component.css'
})
export class ProductReceivingComponent {

}

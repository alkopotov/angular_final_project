import { Component } from '@angular/core';
import { CreditBannerTopComponent } from '../../components/credit-banner-top/credit-banner-top.component';
import { CreditInfoComponent } from '../../components/credit-info/credit-info.component';
import { CreditStepsComponent } from '../../components/credit-steps/credit-steps.component';
import { CreditConditionsComponent } from '../../components/credit-conditions/credit-conditions.component';
@Component({
  selector: 'app-credit-page',
  standalone: true,
  imports: [CreditBannerTopComponent, CreditInfoComponent, CreditStepsComponent, CreditConditionsComponent,],
  templateUrl: './credit-page.component.html',
  styleUrl: './credit-page.component.css'
})
export class CreditPageComponent {
 
}

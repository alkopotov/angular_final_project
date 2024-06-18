import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FilterService } from '../../services/filter.service';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FilterInputCheckboxComponent } from '../filter-input-checkbox/filter-input-checkbox.component';


@Component({
  selector: 'app-filter-elem',
  standalone: true,
  imports: [MatSliderModule, FormsModule, CdkAccordionModule, FilterInputCheckboxComponent],
  templateUrl: './filter-elem.component.html',
  styleUrl: './filter-elem.component.css'
})
export class FilterElemComponent {


  // @Input() public category: number;

  constructor(public filterService: FilterService) { }

}

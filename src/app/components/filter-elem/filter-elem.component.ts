import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FilterService } from '../../services/filter.service';
import { DecimalPipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-filter-elem',
  standalone: true,
  imports: [MatSliderModule, FormsModule, DecimalPipe, MatCheckboxModule, MatAccordion, MatExpansionModule, MatFormFieldModule],
  templateUrl: './filter-elem.component.html',
  styleUrl: './filter-elem.component.css'
})
export class FilterElemComponent {


  @Input() public category: number;

  constructor(public filterService: FilterService) { }

  
  public handleClickCheckbox(e: Event): void {
  
    console.log(e);

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FilterService } from '../../services/filter.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-filter-elem',
  standalone: true,
  imports: [MatSliderModule, FormsModule, DecimalPipe],
  templateUrl: './filter-elem.component.html',
  styleUrl: './filter-elem.component.css'
})
export class FilterElemComponent {


  @Input() public category: number;

  constructor(public filterService: FilterService) { }

  
}

import { Component, Input } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-input-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-input-checkbox.component.html',
  styleUrl: './filter-input-checkbox.component.css'
})
export class FilterInputCheckboxComponent {
  @Input() public category: number;
  @Input() public filterName: string;
  @Input() public filterValue: string;
  @Input() public unit: string;

  public isChecked: boolean = false;

  constructor(public filterService: FilterService) { }

}

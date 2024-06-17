import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-input-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-input-checkbox.component.html',
  styleUrl: './filter-input-checkbox.component.css'
})
export class FilterInputCheckboxComponent implements OnInit {
  @Input() public category: number;
  @Input() public filterName: string;
  @Input() public filterValue: string;
  @Input() public unit: string;

  public isChecked: boolean = false;

  constructor(public filterService: FilterService) { }

  ngOnInit(): void {
    this.isChecked = this.filterService.isCheckboxSelected(this.filterName, this.filterValue)
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked
  }
  handleCheckboxChange() {
    if (this.isChecked) {
      this.filterService.addCheckbox(this.filterName, this.filterValue)
    } else {
      this.filterService.removeCheckbox(this.filterName, this.filterValue)
    }
    console.log(this.filterService.checkboxesSelected)
  }
}

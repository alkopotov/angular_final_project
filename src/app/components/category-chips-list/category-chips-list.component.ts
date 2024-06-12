import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-category-chips-list',
  standalone: true,
  imports: [],
  templateUrl: './category-chips-list.component.html',
  styleUrl: './category-chips-list.component.css'
})
export class CategoryChipsListComponent {

  constructor(public filterService: FilterService) { 
    
  }

  public currentChip: string | null = null;

  public handleChipClick(chip: string): void {
    if (this.currentChip === chip) {
      this.currentChip = null
      this.filterService.currentChip = null
    } else {
      this.currentChip = chip;
      this.filterService.currentChip = chip;
    }
  }
}

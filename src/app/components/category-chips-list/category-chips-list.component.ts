import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-category-chips-list',
  standalone: true,
  imports: [],
  templateUrl: './category-chips-list.component.html',
  styleUrl: './category-chips-list.component.css'
})
export class CategoryChipsListComponent implements OnInit{

  @Input() chip: string | null;

  constructor(public filterService: FilterService) { 
    
  }

  public currentChip: string | null = null;

  public handleChipClick(chip: string): void {
    if (this.filterService.currentChip === chip) {
      this.filterService.currentChip = null;
    } else {
      this.filterService.currentChip = chip;
    }
  }
  
  ngOnInit(): void {
    this.filterService.currentChip = this.chip
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { FilterService } from '../../services/filter.service';
import { FormsModule } from '@angular/forms';
import { HeartIconComponent } from '../../components/svg_components/heart-icon/heart-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [ProductListComponent, FormsModule, HeartIconComponent, RouterLink],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit {

  constructor(public filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.currentCategory = 8;
    this.filterService.resetFilterService();
  }

}

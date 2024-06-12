import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { FilterElemComponent } from '../../components/filter-elem/filter-elem.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product-category-page',
  standalone: true,
  imports: [FilterElemComponent, ProductListComponent, ProductCardComponent],
  templateUrl: './product-category-page.component.html',
  styleUrl: './product-category-page.component.css'
})
export class ProductCategoryPageComponent implements OnInit{

  constructor(public routes: ActivatedRoute, public filterService: FilterService){ 
    this.routes.paramMap.subscribe((params) => this.ngOnInit())
  }

  public ngOnInit(): void {
    this.filterService.currentCategory = this.routes.snapshot.params['id'];
    this.filterService.minPrice = this.filterService.minRangeValue
    this.filterService.maxPrice = this.filterService.maxRangeValue
  }
}

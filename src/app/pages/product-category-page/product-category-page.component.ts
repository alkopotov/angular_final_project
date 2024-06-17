import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { FilterElemComponent } from '../../components/filter-elem/filter-elem.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CategoryChipsListComponent } from '../../components/category-chips-list/category-chips-list.component';
import { BannerProductListComponent } from '../../components/banner-product-list/banner-product-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-category-page',
  standalone: true,
  imports: [FilterElemComponent, ProductListComponent, ProductCardComponent, CategoryChipsListComponent, BannerProductListComponent, FormsModule],
  templateUrl: './product-category-page.component.html',
  styleUrl: './product-category-page.component.css'
})
export class ProductCategoryPageComponent implements OnInit{


  constructor(public routes: ActivatedRoute, public filterService: FilterService){ 
    this.routes.paramMap.subscribe((params) => this.ngOnInit())
  }

  public ngOnInit(): void {
    this.filterService.currentCategory = this.routes.snapshot.params['id'];
    this.filterService.resetFilterService();
  }
}

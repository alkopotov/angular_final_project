import { Component } from '@angular/core';
import { BannerAdvantagesComponent } from '../../components/banner-advantages/banner-advantages.component';
import { BannerPromoComponent } from '../../components/banner-promo/banner-promo.component';
import { BannerSubscriptionComponent } from '../../components/banner-subscription/banner-subscription.component';
import { BannerSliderComponent } from '../../components/banner-slider/banner-slider.component';
import { BannerTextComponent } from '../../components/banner-text/banner-text.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { AsyncPipe } from '@angular/common';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BannerAdvantagesComponent, BannerPromoComponent, BannerSubscriptionComponent, BannerSliderComponent, BannerTextComponent, ProductListComponent, AsyncPipe],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {


  constructor(public productsWorkerService: ProductsWorkerService) { }

  public getPopulars(): Product[] {
    return this.productsWorkerService.products.slice().sort((a, b) => b.count_review - a.count_review).slice(0, 12);
  }

  public getNewProducts(): Product[] {
    let result = []
    let categories = [
      'Смартфоны',
      'Планшеты',
      'Аксессуары',
      'Компьютеры',
      'Гаджеты',
      'Часы'
    ]

    for (let category of categories) {
      let products = this.productsWorkerService.products.slice().sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)).filter(product => product.category === category).slice(0, 2)
      result.push(...products)
    }
    return result.sort((a, b) => b.count_review - a.count_review)

    
  }
}

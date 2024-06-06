import { Component, OnInit } from '@angular/core';
import { BannerAdvantagesComponent } from '../../components/banner-advantages/banner-advantages.component';
import { BannerPromoComponent } from '../../components/banner-promo/banner-promo.component';
import { BannerSubscriptionComponent } from '../../components/banner-subscription/banner-subscription.component';
import { BannerSliderComponent } from '../../components/banner-slider/banner-slider.component';
import { BannerTextComponent } from '../../components/banner-text/banner-text.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { AsyncPipe } from '@angular/common';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BannerAdvantagesComponent, BannerPromoComponent, BannerSubscriptionComponent, BannerSliderComponent, BannerTextComponent, ProductListComponent, AsyncPipe],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {

  public products$: Observable<Product[]>;
  constructor(private productsWorkerService: ProductsWorkerService) { }

  ngOnInit(): void {
    this.productsWorkerService.products
  }

}

import { DecimalPipe, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FilterService } from '../../services/filter.service';

registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './banner-slider.component.html',
  styleUrl: './banner-slider.component.css'
})
export class BannerSliderComponent {
  public products: any[] = [
    {
      title: 'iPhone 15 Pro',
      price: 137900,
      link: '/products/category/2',
      image: "assets/images/banner-slider/product_1.png",
      chip: "iPhone 15 Pro",
      backgroundColor: '#D0EAFC'
      
    },
    {
      title: 'iPad Pro 11',
      price: 109990,
      link: '/products/category/4',
      image: "/assets/images/banner-slider/product_2.png",
      chip: 'iPad Pro 11 (2022)',
      backgroundColor: '#FFA682'
    },
    {
      title: 'MacBook Pro M3',
      price: 187900,
      link: '/products/category/3',
      image: "/assets/images/banner-slider/product_3.png",
      chip: 'MacBook Pro M3',
      backgroundColor: '#FCD0F0'
    },
  ]

  constructor(public filterService: FilterService, private routes: Router) { }

  public currentIndex: number = 0;

  public nextSlide(): void {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  public prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - 1;
    }
  }

  public handleClick(chip: string, link: string): void {
    this.routes.navigate([link], { queryParams: {chip: chip} })
  }
}

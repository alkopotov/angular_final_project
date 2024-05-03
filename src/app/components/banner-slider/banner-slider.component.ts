import { DecimalPipe, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
      title: 'iPhone 14',
      price: 137900,
      link: "/products/iphone-14",
      image: "assets/images/banner-slider/product_1.png"
    },
    {
      title: 'iPad Pro 12,9',
      price: 109990,
      link: "/products/ipad-pro-129",
      image: "/assets/images/banner-slider/product_2.png"
    },
    {
      title: 'MacBook Pro 13',
      price: 187900,
      link: "/products/macbook-pro-13",
      image: "/assets/images/banner-slider/product_3.png"
    },
  ]

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
}

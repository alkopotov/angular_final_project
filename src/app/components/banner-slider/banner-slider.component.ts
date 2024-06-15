import { DecimalPipe, isPlatformBrowser, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './banner-slider.component.html',
  styleUrl: './banner-slider.component.css'
})
export class BannerSliderComponent implements AfterViewInit, OnDestroy{
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private routes: Router) { }

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
  
  private _id: any;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
     this._id = setInterval(() => {
        this.nextSlide();
      }, 6000);
    }
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this._id);
    }
  }
}

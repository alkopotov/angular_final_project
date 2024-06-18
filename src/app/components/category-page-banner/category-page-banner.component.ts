import { Component } from '@angular/core';

@Component({
  selector: 'app-category-page-banner',
  standalone: true,
  imports: [],
  templateUrl: './category-page-banner.component.html',
  styleUrl: './category-page-banner.component.css'
})
export class CategoryPageBannerComponent {

  public bannerData: any[] = [
    {
      title: 'Оплата',
      text: 'Все виды наличного и безналичного расчета',
      image: 'assets/images/category-page-banner/payment.png',
    },
    {
      title: 'Доставка за 2 часа',
      text: 'Быстро и бесплатно доставляем все заказы по Москве',
      image: 'assets/images/category-page-banner/delivery.png',
    },
    {
      title: 'Кредит',
      text: 'Выгодные кредитные предложения от самых популярных банков',
      image: 'assets/images/category-page-banner/credit.png',
    },
    {
      title: 'Гарантия',
      text: 'Предоставляем целый год сервисного обслуживания',
      image: 'assets/images/category-page-banner/warranty.png',
    }
  ]

}

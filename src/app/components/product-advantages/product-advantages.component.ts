import { Component } from '@angular/core';

interface AdvantageItem {
  id: number;
  img: string;
  title: string;
  descr: string;
}

@Component({
  selector: 'app-product-advantages',
  standalone: true,
  imports: [],
  templateUrl: './product-advantages.component.html',
  styleUrl: './product-advantages.component.css'
})
export class ProductAdvantagesComponent {
  public advantages: AdvantageItem[] = [
    {
      id: 1,
      img: '/assets/images/product-page/advantages/1.svg',
      title: 'Только оригинальная продукция',
      descr: ''
    },
    {
      id: 2,
      img: '/assets/images/product-page/advantages/2.svg',
      title: 'Доставка за 2 часа',
      descr: 'Быстро и бесплатно доставляем все заказы по Москве'
    },
    {
      id: 3,
      img: '/assets/images/product-page/advantages/3.svg',
      title: 'Удобная оплата',
      descr: 'Все виды наличного и безналичного расчета'
    },
    {
      id: 4,
      img: '/assets/images/product-page/advantages/4.svg',
      title: 'Кредит',
      descr: 'Выгодные кредитные предложения от самых популярных банков'
    },
    {
      id: 5,
      img: '/assets/images/product-page/advantages/5.svg',
      title: 'Гарантия',
      descr: 'Предоставляем целый год сервисного обслуживания'
    }
  ]
}

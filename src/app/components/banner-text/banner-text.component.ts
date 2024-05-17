import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-text',
  standalone: true,
  imports: [],
  templateUrl: './banner-text.component.html',
  styleUrl: './banner-text.component.css'
})
export class BannerTextComponent {

  public bannerContent: any = {
    header: 'Новые модели Айфонов по выгодным ценам',
    lead: 'Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru предлагает:',
    items: [
      'Низкие цены на все виды устройств, недорогие аксессуары;',
      'Оригинальные подарки бренда;',
      'Новая линейка смартфонов и проверенные старые модели;',
      'Лаконичный дизайн, большой выбор цветов и оттенков;',
      'Все товары в каталоге есть в наличии и доступны для покупки в кредит и рассрочку;',
      'Быстрая доставка по Санкт-Петербургу и области;',
      'Гарантия на все модели телефонов;',
      'Все способы оплаты!',
      'Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, позвонить в магазин и получить консультацию по любой модели Apple.'
    ]
  }

}

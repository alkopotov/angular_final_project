import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter.service';
import { FilterElemComponent } from '../../components/filter-elem/filter-elem.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { CategoryChipsListComponent } from '../../components/category-chips-list/category-chips-list.component';
import { BannerProductListComponent } from '../../components/banner-product-list/banner-product-list.component';
import { FormsModule } from '@angular/forms';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { CategoryPageBannerComponent } from '../../components/category-page-banner/category-page-banner.component';

@Component({
  selector: 'app-product-category-page',
  standalone: true,
  imports: [FilterElemComponent, ProductListComponent, CategoryChipsListComponent, BannerProductListComponent, FormsModule, CategoryPageBannerComponent],
  templateUrl: './product-category-page.component.html',
  styleUrl: './product-category-page.component.css'
})
export class ProductCategoryPageComponent implements OnInit {


  constructor(public routes: ActivatedRoute, public filterService: FilterService, public dialogService: DialogDispatcherService) {
    this.routes.paramMap.subscribe((params) => this.ngOnInit())
  }

  public ngOnInit(): void {
    this.filterService.currentCategory = this.routes.snapshot.params['id'];
    this.filterService.resetFilterService();
  }

  public bottomBannerContent = {
    header: 'Новые модели техники Apple по выгодным ценам',
    text: [
      'Для тех, кто хочет приобрести новую модель техники Apple, наш магазин предлагает:',
      'Низкие цены на все виды устройств, недорогие аксессуары;',
      'Оригинальные подарки бренда;',
      'Новая линейка смартфонов и проверенные старые модели;',
      'Лаконичный дизайн, большой выбор цветов и оттенков;',
      'Все товары в каталоге есть в наличии и доступны для покупки в кредит и рассрочку;',
      'Быстрая доставка по Москве и Санкт-Петербургу',
      'Гарантия на все модели телефонов;',
      'Все способы оплаты!',
      'Товары, представленные на нашем сайте,сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, позвонить в магазин и получить консультацию по любой модели Apple'
    ]
  }
}

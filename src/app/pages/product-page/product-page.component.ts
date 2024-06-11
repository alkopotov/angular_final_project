import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { Router, NavigationEnd } from '@angular/router';
import { ProductReceivingComponent } from '../../components/product-receiving/product-receiving.component';
import { ProductQuestionsComponent } from '../../components/product-questions/product-questions.component';
import { ProductAdvantagesComponent } from '../../components/product-advantages/product-advantages.component';

interface DeliveryItem {
  id: number;
  img: string;
  from: string;
  to: string;
}

interface EarItem {
  id: number;
  img: string;
  title: string;
  descr: string;
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductReceivingComponent,
    ProductQuestionsComponent,
    ProductAdvantagesComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  public product: Product;
  public deliveryArr: DeliveryItem[] = [
    { id: 1, img: '/assets/images/product-page/delivery/1.svg', from: 'Доставим в Санкт-Петербурге', to: 'сегодня до 15:16' },
    { id: 2, img: '/assets/images/product-page/delivery/2.svg', from: 'Самовывоз', to: 'Лиговский проспект 33/35' },
    { id: 3, img: '/assets/images/product-page/delivery/3.svg', from: 'Доставим по России', to: 'до 22.12.2022' }
  ]
  public earDescrArr: EarItem[] = [
    { id: 1, img: '/assets/images/product-page/buy/1.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 2, img: '/assets/images/product-page/buy/2.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 3, img: '/assets/images/product-page/buy/3.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 4, img: '/assets/images/product-page/buy/4.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 5, img: '/assets/images/product-page/buy/5.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
  ]
  
  public baseUrl = this.productService.getApiUrl();

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsWorkerService,
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getOneProduct(id).subscribe((product: Product) => {
      this.product = product;
    });

    // Автоматический скролл до верхней точки страницы при переходе на нее
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scroll(0, 0);
      }
    });
  }
}

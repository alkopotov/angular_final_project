import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { Router, NavigationEnd } from '@angular/router';
import { ProductReceivingComponent } from '../../components/product-receiving/product-receiving.component';
import { ProductQuestionsComponent } from '../../components/product-questions/product-questions.component';
import { ProductAdvantagesComponent } from '../../components/product-advantages/product-advantages.component';
import { DecimalPipe } from '@angular/common';
import { DevTypeService } from '../../services/dev-type.service';
import { FormsModule } from '@angular/forms';
import { ProductLoggingService } from '../../services/product-logging.service';

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

interface priceItem {
  price: number
  discount: number | null
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    DecimalPipe,
    RouterLink,
    ProductReceivingComponent,
    ProductQuestionsComponent,
    ProductAdvantagesComponent,
    FormsModule
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  public product: Product;
  public productList: Product[] = [];
  public productMemoryArr: any[] = [];
  public productImagesArr: any[] = [];
  public productPrice: priceItem = {price: 0, discount: 0};
  public isProductAvailable: boolean;
  public selectedMemory: any;
  public selectedImage: any;

  public DevType = inject(DevTypeService);

  public deliveryArr: DeliveryItem[] = [
    { id: 1, img: 'assets/images/product-page/delivery/1.svg', from: 'Доставим в Санкт-Петербурге', to: 'сегодня до 15:16' },
    { id: 2, img: 'assets/images/product-page/delivery/2.svg', from: 'Самовывоз', to: 'Лиговский проспект 33/35' },
    { id: 3, img: 'assets/images/product-page/delivery/3.svg', from: 'Доставим по России', to: 'до 22.12.2022' }
  ]
  public earDescrArr: EarItem[] = [
    { id: 1, img: 'assets/images/product-page/buy/1.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 2, img: 'assets/images/product-page/buy/2.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 3, img: 'assets/images/product-page/buy/3.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 4, img: 'assets/images/product-page/buy/4.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
    { id: 5, img: 'assets/images/product-page/buy/5.png', title: 'Текст про OS', descr: 'Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance, lightness and durability.' },
  ]
  
  public baseUrl = this.productService.getApiUrl();
  public getProductMemory(): void {
    const uniqueMemories = new Set<string>();

    const sameNamedProducts = this.productList.filter((p) => p.name === this.product.name);

    sameNamedProducts.forEach((p) => {
      const memoryCharacteristic = p.characteristics.find((characteristic) => characteristic.characteristic === 'Объем встроенной памяти')?.value;
      if (memoryCharacteristic && !uniqueMemories.has(memoryCharacteristic)) {
        uniqueMemories.add(memoryCharacteristic);
      }
    });
  
    this.productMemoryArr = [...uniqueMemories];
    this.productMemoryArr.sort((a, b) => a - b);

    // console.log(this.productMemoryArr);
    
  }
  public onMemorySelect(memory: string): void {
    this.selectedMemory = memory;
    this.updateProductDetails();
  }
  public getProductImages(): void {
    const uniqueImages = new Set<string>();
    const sameNamedProducts = this.productList.filter((p) => p.name === this.product.name);
  
    sameNamedProducts.forEach((p) => {
      p.images.forEach((image) => {
        const uniqueIdentifier = `${image}-${p.color}`;
        if (!uniqueImages.has(uniqueIdentifier)) {
          uniqueImages.add(uniqueIdentifier);
          this.productImagesArr.push(
            { image, color: p.color }
          );
        }
      });
    });
    console.log(this.productImagesArr); 
  }
  public onImageClick(image: string) {
    this.selectedImage = image;
    this.updateProductDetails();
  }
  public updateProductDetails(): void {
    const selectedProduct = this.productList.find((p) => 
      p.name === this.product.name && 
      p.images.includes(this.selectedImage) && 
      (
        !this.selectedMemory ||
        p.characteristics.some((characteristic) => characteristic.characteristic === 'Объем встроенной памяти' && characteristic.value === this.selectedMemory)
      )
    );    

    if (selectedProduct) {
      this.productPrice = { price: selectedProduct.price, discount: selectedProduct.discount_price };
      this.isProductAvailable = selectedProduct.is_available;
    } else {
      this.isProductAvailable = false;
    }
  }
 

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsWorkerService,
    private productLoggingService: ProductLoggingService,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.DevType.getDevType();

      this.productList = this.productService.products;

      this.productService.getOneProduct(id).subscribe((product: Product) => {
        this.product = product;
        this.selectedImage = product.images[0];
        this.selectedMemory = this.product.characteristics.find((characteristic) => characteristic.characteristic === 'Объем встроенной памяти')?.value;
        this.productPrice = { price: product.price, discount: product.discount_price };
        this.isProductAvailable = product.is_available;
        this.productLoggingService.logViewedProduct(product);
        this.getProductMemory();
        this.getProductImages();
      });

      // Автоматический скролл до верхней точки страницы при переходе на нее
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scroll(0, 0);
        }
      });
      
    })
  }
}

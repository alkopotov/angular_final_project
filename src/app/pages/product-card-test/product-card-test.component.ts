import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsWorkerService } from '../../services/products-worker.service';
import { Product } from '../../services/products-worker.service';


@Component({
  selector: 'app-product-card-test',
  standalone: true,
  imports: [],
  templateUrl: './product-card-test.component.html',
  styleUrl: './product-card-test.component.css'
})
export class ProductCardTestComponent implements OnInit{
  product: Product = {
    id: 1,
    name: '',
    price: 1,
    discount_price: 1,
    guarantee: 1,
    rating: 1, 
    count_review: 1,
    is_available: false,
    store_address: '',
    color: '',
    brand: '',
    country: '',
    category_id: 1,
    category: null, 
    images: [],
    product_type_id: 1,
    product_types: [],
    characteristics: [],
  } 

  public baseUrl = 'http://localhost:1452/';

  constructor( private route: ActivatedRoute, private productService: ProductsWorkerService ){}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) 
    this.productService.getOneProduct(id).subscribe((product) => {
      this.product = product
      console.log(product);
      
    })
  }
}

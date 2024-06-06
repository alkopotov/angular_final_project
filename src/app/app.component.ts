import { Component, OnInit, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderElemComponent } from './components/header-elem/header-elem.component';
import { FooterElemComponent } from './components/footer-elem/footer-elem.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CartStorageService } from './services/cart-storage.service';
import { ProductsWorkerService } from './services/products-worker.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderElemComponent, FooterElemComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {
  private cartStorageService = inject(CartStorageService);
  title = 'apple_store';

  constructor(public productService: ProductsWorkerService){}

  ngOnInit(): void {
    this.productService.getProducts()
    this.cartStorageService.getProductsInCartStorage();
  }
}

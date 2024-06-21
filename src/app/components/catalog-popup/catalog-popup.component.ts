import { Component, Input, Output, EventEmitter, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { TripplePointComponent } from '../svg_components/tripple-point/tripple-point.component';
import { Router, RouterLink, NavigationEnd} from '@angular/router';
import { Product, ProductsWorkerService } from '../../services/products-worker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog-popup',
  standalone: true,
  imports: [TripplePointComponent, RouterLink],
  templateUrl: './catalog-popup.component.html',
  styleUrl: './catalog-popup.component.css'
})
export class CatalogPopupComponent implements OnInit, OnDestroy {
  public showPopup = false;
  private subscription: Subscription;
  constructor(private elementRef: ElementRef, public router: Router, public productService: ProductsWorkerService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showPopup = false;
    }
  }

  ngOnInit(): void {
    this.productService.getProducts();
    this.subscription = this.productService.categoryForPopup.subscribe((id) => {
      this.productService.forPopupProducts(id);
    });
    this.productService.setCategoryForPopup(this.productService.categoryForPopup.value);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showPopup = false;
      }
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showPopupSwitch() {
    if (this.showPopup) {
      this.showPopup = false;
      console.log(this.showPopup);
    } else {
      this.showPopup = true;
      console.log(this.showPopup);
    }
  }

  goToProductCard(id: number) {
    this.router.navigate(['/products', id]);
  }

  setCategory(id: number){
    this.productService.setCategoryForPopup(id);
    console.log(this.productService.categoryForPopup);
  }

  hideListOnBlur(): void {
    setTimeout(() => {
      this.showPopup = false;
    }, 200);
  }
}
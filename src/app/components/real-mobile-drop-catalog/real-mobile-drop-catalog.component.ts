import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsWorkerService } from '../../services/products-worker.service';
import { CatalogIconComponent } from '../svg_components/catalog-icon/catalog-icon.component';

@Component({
  selector: 'app-real-mobile-drop-catalog',
  standalone: true,
  imports: [RouterLink, CatalogIconComponent],
  templateUrl: './real-mobile-drop-catalog.component.html',
  styleUrl: './real-mobile-drop-catalog.component.css'
})
export class RealMobileDropCatalogComponent {
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

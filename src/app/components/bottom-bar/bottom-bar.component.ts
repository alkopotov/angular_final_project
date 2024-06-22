import { Component, inject } from '@angular/core';
import { CatalogIconComponent } from '../svg_components/catalog-icon/catalog-icon.component';
import { CartIconComponent } from '../svg_components/cart-icon/cart-icon.component';
import { HeartIconComponent } from '../svg_components/heart-icon/heart-icon.component';
import { CompareIconComponent } from '../svg_components/compare-icon/compare-icon.component';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { FavoritesStorageService } from '../../services/favorites-storage.service';
import { Router } from '@angular/router';
import { MobileDropCatalogComponent } from '../mobile-drop-catalog/mobile-drop-catalog.component';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CatalogIconComponent, CartIconComponent, HeartIconComponent, CompareIconComponent, MobileDropCatalogComponent],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {

  constructor(private _router: Router) { }
  public dialogService = inject(DialogDispatcherService);
  public favoritesStorage = inject(FavoritesStorageService);

  public handleOpenFavorites(): void {
    if (this.favoritesStorage.productsInFavorites.length > 0) {
      this._router.navigate(['/products/category/8']);
    }
  }
}

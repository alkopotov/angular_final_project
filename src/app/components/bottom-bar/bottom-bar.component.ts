import { Component, inject } from '@angular/core';
import { CatalogIconComponent } from '../svg_components/catalog-icon/catalog-icon.component';
import { CartIconComponent } from '../svg_components/cart-icon/cart-icon.component';
import { HeartIconComponent } from '../svg_components/heart-icon/heart-icon.component';
import { CompareIconComponent } from '../svg_components/compare-icon/compare-icon.component';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CatalogIconComponent, CartIconComponent, HeartIconComponent, CompareIconComponent],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {

  public dialogService = inject(DialogDispatcherService);

}

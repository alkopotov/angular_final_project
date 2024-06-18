import { Component, OnInit, inject } from '@angular/core';
import { MainLogoComponent } from '../svg_components/main-logo/main-logo.component';
import { PhoneIconComponent } from '../svg_components/phone-icon/phone-icon.component';
import { HeartIconComponent } from '../svg_components/heart-icon/heart-icon.component';
import { CompareIconComponent } from '../svg_components/compare-icon/compare-icon.component';
import { RouterLink } from '@angular/router';
import { TripplePointComponent } from '../svg_components/tripple-point/tripple-point.component';
import { CartIconComponent } from '../svg_components/cart-icon/cart-icon.component';
import { HeaderBottomComponent } from '../header-bottom/header-bottom.component';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { DevTypeService } from '../../services/dev-type.service';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { CatalogSearchBarComponent } from '../catalog-search-bar/catalog-search-bar.component';
import { CartStorageService } from '../../services/cart-storage.service';


@Component({
  selector: 'app-header-elem',
  standalone: true,
  imports: [
    RouterLink,
    MainLogoComponent,
    PhoneIconComponent,
    HeartIconComponent,
    CompareIconComponent,
    HamburgerMenuComponent,
    TripplePointComponent,
    CartIconComponent,
    HeaderBottomComponent,
    BottomBarComponent,
    CatalogSearchBarComponent
  ],
  templateUrl: './header-elem.component.html',
  styleUrl: './header-elem.component.css'
})
export class HeaderElemComponent implements OnInit {


  public topNavItems: any[] = [
    {
      title: 'Весь каталог',
      link: '/products/category/2',
    },
    {
      title: 'Акции',
      link: '/sales',
      before: 'assets/icons/fire_icon.svg',
    },
    {
      title: 'Гарантия',
      link: '/warranty'
    },
    {
      title: 'Политика возврата',
      link: '/returns',
    },
    {
      title: 'Кредит',
      link: '/credit',
    },
    {
      title: 'Доставка и оплата',
      link: '/delivery',
    },
    {
      title: 'Отзывы',
      link: '/comments',
    },
    {
      title: 'Контакты',
      link: '/contacts',
    },
  ];


  constructor(public cartStorageService: CartStorageService){}
  
  // public OpenDialog() {
  //   this.dialog.open(CallbackModalComponent, {})
  // }

  public DevType = inject(DevTypeService);
  public dialogService= inject(DialogDispatcherService);
  

  ngOnInit(): void {
    this.DevType.getDevType();
  }
}

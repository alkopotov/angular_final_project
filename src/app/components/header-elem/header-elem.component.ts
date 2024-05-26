import { Component, OnInit, inject } from '@angular/core';
import { MainLogoComponent } from '../svg_components/main-logo/main-logo.component';
import { PhoneIconComponent } from '../svg_components/phone-icon/phone-icon.component';
import { HeartIconComponent } from '../svg_components/heart-icon/heart-icon.component';
import { CompareIconComponent } from '../svg_components/compare-icon/compare-icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HamburgerMemuComponent } from '../svg_components/hamburger-memu/hamburger-memu.component';
import { TripplePointComponent } from '../svg_components/tripple-point/tripple-point.component';
import { CartIconComponent } from '../svg_components/cart-icon/cart-icon.component';
import { HeaderBottomComponent } from '../header-bottom/header-bottom.component';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { DevTypeService } from '../../services/dev-type.service';
import { MatDialog } from '@angular/material/dialog';
import { CallbackModalComponent } from '../callback-modal/callback-modal.component';


@Component({
  selector: 'app-header-elem',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MainLogoComponent,
    PhoneIconComponent,
    HeartIconComponent,
    CompareIconComponent,
    HamburgerMemuComponent,
    TripplePointComponent,
    CartIconComponent,
    HeaderBottomComponent,
    BottomBarComponent,
    CallbackModalComponent
  ],
  templateUrl: './header-elem.component.html',
  styleUrl: './header-elem.component.css'
})
export class HeaderElemComponent implements OnInit {

  public topNavItems: any[] = [
    {
      title: 'Весь каталог',
      link: '/catalog',
    },
    {
      title: 'Акции',
      link: '/sales',
      before: 'assets/icons/fire_icon.svg',
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


  constructor(public dialog: MatDialog){}
  
  public OpenDialog() {
    this.dialog.open(CallbackModalComponent, {})
  }

  public DevType = inject(DevTypeService);
  

  ngOnInit(): void {
    this.DevType.getDevType();
  }
}

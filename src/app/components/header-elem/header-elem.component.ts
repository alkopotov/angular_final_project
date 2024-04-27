import { Component, HostListener } from '@angular/core';
import { MainLogoComponent } from '../svg_components/main-logo/main-logo.component';
import { PhoneIconComponent } from '../svg_components/phone-icon/phone-icon.component';
import { HeartIconComponent } from '../svg_components/heart-icon/heart-icon.component';
import { CompareIconComponent } from '../svg_components/compare-icon/compare-icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HamburgerMemuComponent } from '../svg_components/hamburger-memu/hamburger-memu.component';


@Component({
  selector: 'app-header-elem',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MainLogoComponent, PhoneIconComponent, HeartIconComponent, CompareIconComponent, HamburgerMemuComponent],
  templateUrl: './header-elem.component.html',
  styleUrl: './header-elem.component.css'
})
export class HeaderElemComponent {

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

  public deviceWidth: any;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.deviceWidth = event.target.innerWidth;
  }
  
  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.deviceWidth = event.currentTarget.innerWidth;
  }

}

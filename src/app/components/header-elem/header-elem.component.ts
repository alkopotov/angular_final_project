import { Component } from '@angular/core';
import { MainLogoComponent } from '../svg_components/main-logo/main-logo.component';
import { PhoneIconComponent } from '../svg_components/phone-icon/phone-icon.component';
import { HeartIconComponent } from '../svg_components/heart-icon/heart-icon.component';
import { CompareIconComponent } from '../svg_components/compare-icon/compare-icon.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header-elem',
  standalone: true,
  imports: [RouterLink, MainLogoComponent, PhoneIconComponent, HeartIconComponent, CompareIconComponent],
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

}

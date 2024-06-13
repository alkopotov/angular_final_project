import { Component, inject } from '@angular/core';
import { MainLogoComponent } from '../svg_components/main-logo/main-logo.component';
import { RouterLink } from '@angular/router';
import { DialogDispatcherService } from '../../services/dialog-dispatcher.service';
import { SocialMediaBlockComponent } from '../social-media-block/social-media-block.component';

@Component({
  selector: 'app-footer-elem',
  standalone: true,
  imports: [RouterLink, MainLogoComponent, SocialMediaBlockComponent],
  templateUrl: './footer-elem.component.html',
  styleUrl: './footer-elem.component.css'
})
export class FooterElemComponent {

  public routerLinks: any[] = [
    {
      link: '/warranty',
      title: 'Гарантия'
    },
    {
      link: '/returns',
      title: 'Политика возврата'
    },
    {
      link: '/credit',
      title: 'Кредит'
    },
    {
      link: '/delivery',
      title: 'Доставка и оплата'
    },
    {
      link: '/comments',
      title: 'Отзывы'
    },
    {
      link: '/contacts',
      title: 'Контакты'
    },
    {
      link: '/confidntiality',
      title: 'Политика конфиденциальности'
    }
  ];

  public categoriesLinks: any[] = [
    {
      link: '/categories/iphone',
      title: 'iPhone'
    },
    {
      link: '/categories/ipad',
      title: 'iPad'
    },
    {
      link: '/categories/macbook',
      title: 'Macbook и iMac'
    },
    {
      link: '/categories/watch',
      title: 'Watch'
    },
    {
      link: '/categories/acessories',
      title: 'Аксессуары'
    },
    {
      link: '/sales',
      title: 'Акции'
    }
  ];

  public dialogService = inject(DialogDispatcherService);
}

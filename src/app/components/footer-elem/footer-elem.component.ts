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
      link: '/products/category/2',
      title: 'iPhone'
    },
    {
      link: '/products/category/4',
      title: 'iPad'
    },
    {
      link: '/products/category/3',
      title: 'Macbook и iMac'
    },
    {
      link: '/products/category/5',
      title: 'Watch'
    },
    {
      link: '/products/category/1',
      title: 'Аксессуары'
    },
    {
      link: '/products/category/7',
      title: 'Акции'
    }
  ];

  public dialogService = inject(DialogDispatcherService);
}

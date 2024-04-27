import { Component } from '@angular/core';
import { BannerAdvantagesComponent } from '../../components/banner-advantages/banner-advantages.component';
import { BannerPromoComponent } from '../../components/banner-promo/banner-promo.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BannerAdvantagesComponent, BannerPromoComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}

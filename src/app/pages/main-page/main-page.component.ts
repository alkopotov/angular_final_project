import { Component } from '@angular/core';
import { BannerAdvantagesComponent } from '../../components/banner-advantages/banner-advantages.component';
import { BannerPromoComponent } from '../../components/banner-promo/banner-promo.component';
import { BannerSubscriptionComponent } from '../../components/banner-subscription/banner-subscription.component';
import { BannerSliderComponent } from '../../components/banner-slider/banner-slider.component';
import { BannerTextComponent } from '../../components/banner-text/banner-text.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BannerAdvantagesComponent, BannerPromoComponent, BannerSubscriptionComponent, BannerSliderComponent, BannerTextComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}

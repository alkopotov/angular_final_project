import { Component } from '@angular/core';
import { BannerAdvantagesComponent } from '../../components/banner-advantages/banner-advantages.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BannerAdvantagesComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}

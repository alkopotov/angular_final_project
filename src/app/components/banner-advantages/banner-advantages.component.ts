import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { log } from 'console';


@Component({
  selector: 'app-banner-advantages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner-advantages.component.html',
  styleUrl: './banner-advantages.component.css'
})
export class BannerAdvantagesComponent {


  public advantages: any[] = [
    {
      title: 'Акции и подарки',
      text: 'Постоянные акции, бонусы и скидки. Покупайте технику Apple по самым выгодным ценам',
      image: 'assets/images/banner-advantages/img_1.png',
      link: '/sales',
      topColor: '#FE94A6',
      bottomColor: '#F2F2F2',
    },
    {
      title: 'Доставим за 3 часа',
      text: 'Быстрая и бесплатная доставка по Москве. Доставим за 3 часа в день заказа. Также доступна быстрая доставка по всей России или самовывоз',
      image: 'assets/images/banner-advantages/img_2.png',
      link: '/delivery',
      topColor: '#E685FF',
      bottomColor: '#F2F2F2',

    },
    {
      title: 'Удобные способы оплаты',
      text: 'Наличными или картой при получении, оплата на сайте или в кредит',
      image: 'assets/images/banner-advantages/img_3.png',
      link: '/delivery',
      topColor: '#7DE9FF',
      bottomColor: '#F2F2F2',
    },
    {
      title: 'Покупка в кредит',
      text: 'Получите самое выгодное кредитное предложение от более чем 30 ведущих банков страны руб. - бесплатная доставка',
      image: 'assets/images/banner-advantages/img_4.png',
      link: '/credit',
      topColor: '#FFE685',
      bottomColor: '#F6F6F6',
    },
    {
      title: 'Гарантия',
      text: 'Все товары, представленные в нашем сайте, имеют гарантию от нашего магазина или компании Apple',
      image: 'assets/images/banner-advantages/img_5.png',
      link: '/credit',
      topColor: '#ADFFC1',
      bottomColor: '#F2F2F2',
    }
  ];

 
  public deviceWidth: any;
  
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.deviceWidth = event.target.innerWidth;
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    console.log(event.target.innerWidth);
    
    this.deviceWidth = event.target.innerWidth;
  }

}

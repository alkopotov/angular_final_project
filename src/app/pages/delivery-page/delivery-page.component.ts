import { Component } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { RouterLink } from '@angular/router';
import { SubwayPointComponent } from '../../components/subway-point/subway-point.component';

interface DeliveryAdvantage {
  id: number
  img: string
  img_class: string
  title: string
  description: string
}

interface PickupItem {
  id: number
  street: string
  name_subway: string
  from_subway: string
  work_time: string
}

interface PaymentItem {
  id: number
  img: string
  title: string
  description: string
}

@Component({
  selector: 'app-delivery-page',
  standalone: true,
  imports: [MapComponent, SubwayPointComponent, RouterLink],
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.css'
})

export class DeliveryPageComponent {
  public deliveryAdvantages: DeliveryAdvantage[] = [
    { id: 1, img: '/assets/images/delivery-page/scooter.png', img_class: 'img-1', title: 'Бесплатная доставка за 3 часа', description: 'в пределах МКАД при заказе от 30 000₽ за пределами МКАД или при меньшей сумме стоимость доставки  350₽ ' },
    { id: 2, img: 'assets/images/delivery-page/drone.png', img_class: 'img-2', title: 'Доставка по России', description: '3-5 дней в зависимости от города через СДЭК или Почту России. Точная стоимость доставки известна при оформлении заказа' }
  ]

  public pickupList: PickupItem[] = [
    { id: 1, street: 'ул Барклая 8', name_subway: 'Багратионовская', from_subway: '5 минут', work_time: 'ежедневно 10:00 — 22:00' },
    { id: 2, street: 'ул Барклая 8', name_subway: 'Багратионовская', from_subway: '5 минут', work_time: 'ежедневно 10:00 — 22:00' }
  ]

  public paymentList: PaymentItem[] = [
    { id: 1, img: '/assets/images/delivery-page/payment/1.png', title: 'Оплата наличными', description: 'Оплатить товар наличными вы можете как в магазине, так и при доставке на дом – у наших курьеров всегда есть сдача. Перед тем, как расплатиться, у вас есть возможность удостовериться в надлежащем качестве устройства, распаковав коробку.' },
    { id: 2, img: '/assets/images/delivery-page/payment/2.png', title: 'Банковской картой в магазине/курьеру', description: 'Неважно, забираете ли вы товар сами из магазина или заказали доставку – в любом случае вы можете расплатиться таким способом, ведь у наших курьеров всегда есть терминалы.' },
    { id: 3, img: '/assets/images/delivery-page/payment/3.png', title: 'Онлайн оплата +8% комиссия', description: 'Оплата через платежную систему на сайте при помощи банковской карты, яндекс деньги, web money и др. Обратите внимание, комиссия зависит от способа оплаты.' },
    { id: 4, img: '/assets/images/delivery-page/payment/4.png', title: 'Безналичный расчет', description: 'Мы всегда действуем в интересах покупателей, поэтому предоставляем возможность оплатить товар при помощи безналичного расчета. Обратитесь к нашим менеджерам по телефону +7 (812) 704-86-97, чтобы получить всю необходимую информацию для осуществления оплаты этим способом.' },
    { id: 5, img: '/assets/images/delivery-page/payment/5.png', title: 'Кредит', description: 'Иногда желание стать владельцем гаджета не совсем совпадает с возможностью сразу оплатить всю сумму. Но огорчаться не следует – вы можете приобрести любой товар в кредит. Мы сотрудничаем со многими банками, поэтому оформление кредита происходит очень быстро и просто. Уточнить все моменты для получения кредитных средств вы можете у наших менеджеров, позвонив по указанному телефону +7 (812) 704-86-97' },
  ]
}

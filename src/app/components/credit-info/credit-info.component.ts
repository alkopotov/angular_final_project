import { Component } from '@angular/core';
interface DivBlockData {
  header: string;
  paragraph: string;
  src: string;
}

@Component({
  selector: 'app-credit-info',
  standalone: true,
  imports: [],
  templateUrl: './credit-info.component.html',
  styleUrl: './credit-info.component.css'
})
export class CreditInfoComponent {
  blocks: DivBlockData[] = [
    {
      header: '80% заявок одобряют',
      paragraph: 'Максимально высокая вероятность одобрения',
      src:'assets/images/banner-credit/thumb_vector.png',
    },
    {
      header: '10 минут на заполнение',
      paragraph: '1 анкета для всех банков сразу',
      src:'assets/images/banner-credit/10_min_victor.png',
    },
    {
      header: 'Без скрытых платежей',
      paragraph: 'плата за рассрочку заранее включена в стоимость товаров ',
      src:'assets/images/banner-credit/akar-icons_eye.png',
    } 
  ];
}

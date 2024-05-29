import { Component } from '@angular/core';
interface DivBlockData {
  header: string;
  paragraph: string;
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
    },
    {
      header: '10 минут на заполнение',
      paragraph: '1 анкета для всех банков сразу',

    },
    {
      header: 'Без скрытых платежей',
      paragraph: 'плата за рассрочку заранее включена в стоимость товаров ',

    }
  ];
}

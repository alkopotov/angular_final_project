import { Component } from '@angular/core';

interface Question {
  id: number;
  title: string;
  descr: string;
}

@Component({
  selector: 'app-product-questions',
  standalone: true,
  imports: [],
  templateUrl: './product-questions.component.html',
  styleUrl: './product-questions.component.css'
})
export class ProductQuestionsComponent {
  public questions: Question[] = [
    {
      id: 1,
      title: 'Телефоны новые или восстановленные?',
      descr: 'Все телефоны в istoreapple.ru полностью оригинальные, с полной стандартной комплектацией.'
    },
    {
      id: 2,
      title: 'Почему у вас такие низкие цены?',
      descr: 'Мы продаем американские и европейские смартфоны. На них цена на 15-20% дешевле, чем на смартфоны, выпущенные для Российского рынка. Для пользователя никакой разницы между Американскими и Российскими моделями нет. При желании, у нас есть и ростест модели, но цена на них будет выше.'
    },
    {
      id: 3,
      title: 'Могу ли я проверить устройство до оплаты?',
      descr: 'Конечно! Мы гарантируем вам качество. Вы можете выполнить любые проверки техники перед оплатой'
    },
    {
      id: 4,
      title: 'Какой срок гарантии?',
      descr: 'На всю технику, представленную у нас на сайте, мы предоставляем гарантию 365 дней. Обмен и возврат возможен в течение 14 дней.'
    }
  ]
}

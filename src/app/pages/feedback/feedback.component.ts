import { Component } from '@angular/core';

@Component({
  selector: 'j-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  numbers = [
    {
      id: 1,
      description: 'Crescimento de marca',
      number: 230,
      sufix: '%',
    },
    {
      id: 2,
      description: 'Marcas Salvas',
      number: 19,
      sufix: '+',
    },
    {
      id: 3,
      description: 'Marcas que confiam em nós',
      number: 19,
      sufix: '+',
    },
    {
      id: 4,
      description: 'Visualizações ganhas',
      number: 873,
      sufix: 'M+',
    },
  ];
}

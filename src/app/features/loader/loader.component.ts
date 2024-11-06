import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { LoaderService } from './loader.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jump-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [
    trigger('wordAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
})
export class LoaderComponent implements OnInit, OnDestroy {
  loaderState = signal<boolean>(false);
  constructor(private loaderService: LoaderService) {
    this.loaderService.showLoaders$.subscribe((state) => {
      this.loaderState.update((loader) => {
        loader = state;
        return state;
      });
    });
  }

  marketingWords: string[] = [
    'Engajamento',
    'Conversão',
    'Análise',
    'SEO',
    'ROI',
    'Conteúdo',
    'Social Media',
    'Tráfego',
    'Visibilidade',
    'Segmentação',
    'Leads',
    'Retenção',
    'Analytics',
    'Estratégia',
    'Público-Alvo',
    'Alcance',
    'Automação',
    'Remarketing',
    'Inovação',
    'Performance',
    'Dados',
    'Otimização',
  ];

  currentWordIndex: number = 0;
  currentWord: string = this.marketingWords[0];

  private intervalId: any;

  ngOnInit(): void {
    this.startWordRotation();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startWordRotation(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
    this.intervalId = setInterval(() => {
      this.currentWord = '';
      this.currentWordIndex =
        (this.currentWordIndex + 1) % this.marketingWords.length;

      setTimeout(() => {
        this.currentWord = this.marketingWords[this.currentWordIndex];
      }, 1000);
    }, 3000); // Troca a cada 2 segundos
  }
}

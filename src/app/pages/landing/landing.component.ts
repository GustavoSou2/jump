import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  categorySelected: number = 0;

  services = [
    {
      title: 'Branding',
      code: 'branding',
      descriptionService:
        ' Criação e gestão de marcas fortes, definindo identidade, valores e missão para destacar-se no mercado.',
      isSelectedService: false,
      projects: [
        'https://i.pinimg.com/564x/1a/03/c0/1a03c017c4535eb3a5aeb119aae82df8.jpg',
      ],
    },
    {
      title: 'Social Media',
      code: 'social-media',
      descriptionService:
        ' Estratégias de marketing digital para aumentar engajamento e visibilidade nas redes sociais, atraindo mais seguidores e clientes.',
      isSelectedService: false,
      projects: [
        'https://i.pinimg.com/236x/36/dc/44/36dc44e06c888af739b940cde00653fb.jpg',
        'https://i.pinimg.com/236x/e9/82/51/e98251dca3bb0c365d2e216659cd27a8.jpg',
        'https://i.pinimg.com/236x/27/2a/63/272a6365acfd553fab56b78821f8e7aa.jpg',
      ],
    },
    {
      title: 'Identidade Visual',
      code: 'visual-identity',
      descriptionService:
        'Desenvolvimento de logotipos e elementos visuais únicos que refletem a essência e valores da sua marca.',
      isSelectedService: false,
      projects: [
        'https://img.elo7.com.br/product/685x685/4EF7854/caixa-personalizada-para-joia.jpg',
      ],
    },
    {
      title: 'Gestão de tráfego orgânico',
      code: 'organic',
      descriptionService:
        'Atraia visitantes qualificados ao seu site com SEO e conteúdo relevante, aumentando a visibilidade sem custos de anúncios.',
      isSelectedService: false,
      projects: [],
    },
    {
      title: 'Gestão de tráfego pago',
      code: 'paid',
      descriptionService:
        ' Campanhas de anúncios eficazes no Google, Facebook e outras plataformas para gerar leads e aumentar vendas rapidamente.',
      isSelectedService: false,
      projects: [],
    },
    {
      title: 'Desenvolvimento de Sites',
      code: 'web-development',
      descriptionService:
        ' Criação de sites responsivos e personalizados, otimizados para SEO, que oferecem uma experiência de usuário excepcional.',
      isSelectedService: false,
      projects: [],
    },
  ];

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

  latestPost = [
    {
      id: 1,
      banner:
        'https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sabe qual a diferença de tráfego orgânico e pago?',
      description:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      createdAt: Date.parse('2024-09-01'),
    },
    {
      id: 2,
      banner:
        'https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Como a sua marca conversa com o público?',
      description:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      createdAt: Date.parse('2024-08-27'),
    },
    {
      id: 3,
      banner:
        'https://images.pexels.com/photos/5947542/pexels-photo-5947542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'O que te diferencia da concorrência?',
      description:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      createdAt: Date.parse('2024-08-03'),
    },
    {
      id: 4,
      banner:
        'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'O que te diferencia da concorrência?',
      description:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      createdAt: Date.parse('2024-07-29'),
    },
  ];
}

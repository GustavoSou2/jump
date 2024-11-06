import { ViewportScroller } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'j-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuActive = signal<number>(0);

  toggleMenu = false;

  menu = [
    {
      name: 'Inicio',
      id: 'menu__',
      active: true,
    },
    {
      name: 'Sobre',
      id: 'about__',
      active: false,
    },
    {
      name: 'Serviços',
      id: 'services__',
      active: false,
    },
    // {
    //   name: 'Blog',
    //   id: 'blog__',
    //   active: false,
    // },
    {
      name: 'Contato',
      id: 'cta__',
      active: false,
    },
  ];

  socialMedia = [
    {
      name: 'Instagram',
      code: 'instagram',
      svg: 'instagram.svg',
      click: () => {
        this.openLink('https://www.instagram.com/jumpagenciaofc/');
      },
    },
    {
      name: 'Whatsapp',
      code: 'whatsapp',
      svg: 'whatsapp.svg',
      click: () => {
        this.openLink('https://wa.me/19987693611');
      },
    },
    {
      name: 'Share',
      code: 'share',
      svg: 'shared.svg',
      click: () => {
        if (this.isShareSupported()) {
          navigator
            .share(this.shareData)
            .then(() => console.log('Compartilhado com sucesso!'))
            .catch((error) => console.error('Erro ao compartilhar:', error));
        } else {
          alert('A API de compartilhamento não é suportada neste navegador.');
        }
      },
    },
  ];

  shareData = {
    title: 'Jump | Agência de Marketing',
    text: 'Transformamos cliques em clientes! Nossa agência de marketing digital domina o tráfego orgânico com SEO e conteúdo incrível. Visibilidade garantida!',
    url: window.location.href,
  };

  constructor(private viewportScroller: ViewportScroller) {}

  isShareSupported() {
    return !!navigator.share;
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

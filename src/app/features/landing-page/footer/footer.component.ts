import { Component } from '@angular/core';

@Component({
  selector: 'j-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
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

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

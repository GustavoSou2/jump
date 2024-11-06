import { Component, signal } from '@angular/core';

@Component({
  selector: 'blog-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  blogAsideMenuTags = signal([]);
  blogAsideMenu = [
    {
      name: 'Inicio',
      svgCode: '1f3e0',
    },
    {
      name: 'Salvos',
      svgCode: '1f4be',
    },
    {
      name: 'Curtidas',
      svgCode: '1f49f',
    },
  ];
}

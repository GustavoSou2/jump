import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const SERVICE_TYPES_DICT = {
  VISUAL_IDENTITY: 1,
  BRANDING: 2,
  MANAGEMENT: 3,
  SOCIAL_MEDIA: 4,
}

interface ServiceType {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'j-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  SERVICE_TYPES_DICT = SERVICE_TYPES_DICT;
  serviceTypeSelectedId = 1;
  servicesType: ServiceType[] = [
    {
      id: 1,
      title: 'Identidade Visual',
      description:
        'Transforme sua marca em uma obra de arte! A identidade visual é o conjunto de elementos gráficos que representam sua marca, como logotipo, cores e tipografia. É a primeira impressão que seu público terá, então vamos garantir que seja inesquecível! Com uma identidade visual bem definida, sua empresa se destaca no mercado e cria uma conexão emocional com seus clientes.',
    },
    {
      id: 2,
      title: 'Branding',
      description:
        'Construa uma marca que todos amam! Branding é mais do que apenas um logotipo bonito; é sobre criar uma personalidade única para sua marca. Envolve a definição de valores, missão e a forma como você se comunica com seu público. Com uma estratégia de branding sólida, sua marca se torna reconhecida e respeitada, aumentando a lealdade dos clientes e a visibilidade no mercado.',
    },
    {
      id: 3,
      title: 'Gestão de Tráfego',
      description:
        'Traga mais visitantes para o seu site! A gestão de tráfego é a arte de atrair e direcionar visitantes qualificados para suas páginas online. Utilizando técnicas de SEO, anúncios pagos e marketing de conteúdo, aumentamos a visibilidade da sua marca e garantimos que o público certo encontre você. Mais tráfego significa mais oportunidades de conversão e crescimento para o seu negócio.',
    },
    {
      id: 4,
      title: 'Social Media',
      description:
        'Conquiste corações nas redes sociais! Social Media é sobre criar e gerenciar conteúdo envolvente para as plataformas sociais da sua marca. Desde posts criativos até interações com seguidores, nossa equipe cuida de tudo para aumentar seu engajamento e construir uma comunidade fiel. Com uma presença forte nas redes sociais, sua marca se mantém relevante e próxima do seu público',
    },
  ];
}

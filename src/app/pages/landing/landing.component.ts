import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../../features/landing-page/hero/hero.component';
import { AboutComponent } from '../../features/landing-page/about/about.component';
import { ServicesComponent } from '../../features/landing-page/services/services.component';
import { BlogComponent } from '../../features/landing-page/blog/blog.component';
import { CtaComponent } from '../../features/landing-page/cta/cta.component';
import { FeedbackComponent } from '../../features/landing-page/feedback/feedback.component';
import { FooterComponent } from '../../features/landing-page/footer/footer.component';
import { HeaderComponent } from '../../features/landing-page/header/header.component';
import { AuthComponent } from '../auth/auth.component';
import { NotificationComponent } from '../../features/notification/notification.component';
import { LoaderComponent } from '../../features/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    CtaComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderComponent,
    AuthComponent,
    CommonModule,
    NotificationComponent,
    LoaderComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  categorySelected: number = 0;
}

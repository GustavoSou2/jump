import { Component, Input, input, signal } from '@angular/core';
import { Post } from '../../../core/models/post.model';

@Component({
  selector: 'blog-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() set likesPost(likes: number) {
    this.likes.set(likes ?? 0);
  }
  @Input() savesPost(saves: number) {
    this.saves.set(saves ?? 0);
  }
  post = input.required<Post>();
  saves = signal<number>(0);
  likes = signal<number>(0);

  savePost() {
    this.saves.update((saves) => saves + 1);
  }

  likePost() {
    this.likes.update((likes) => likes + 1);
  }

  removeHtmlTags(text: string): string {
    return text ? text.replace(/<\/?[^>]+(>|$)/g, '') : '';
  }

  calculateReadingTime(text: string): string {
    const words = text.length / 5; // Considera que cada palavra tem 5 caracteres em média

    const readingTime = Math.ceil(words / 200); // Arredonda para cima

    return `${readingTime} minuto(s) de leitura`;
  }
}

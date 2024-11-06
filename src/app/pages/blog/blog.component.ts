import { Component, Inject, OnInit, signal } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { PostService } from '../../core/services/post/post.service';
import { CardComponent } from '../../components/blog/card/card.component';
import { CommonModule } from '@angular/common';
import { AsideOptionsComponent } from '../../features/blog/aside-options/aside-options.component';
import { MenuComponent } from '../../features/blog/menu/menu.component';
import { StorageService } from '../../utils/local-storage/local-storage.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardComponent, CommonModule, AsideOptionsComponent, MenuComponent],
  providers: [PostService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  cookieKey: string = 'latestPost';
  posts$ = signal<Observable<any[]> | null>(null);

  constructor(
    @Inject(PostService) private postService: PostService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const postsOnLocalStorage = this.storageService.getItem(this.cookieKey);

    if (!!postsOnLocalStorage && postsOnLocalStorage.length > 0) {
      const posts = JSON.parse(postsOnLocalStorage);

      return this.posts$.update(() => of(posts));
    }

    this.postService.findAllPosts().then(async (posts) => {
      await this.storageService.setItem(this.cookieKey, JSON.stringify(posts));

      this.posts$.update(() => of(posts));
    });
  }
}

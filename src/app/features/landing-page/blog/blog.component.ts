import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostService } from '../../../core/services/post/post.service';
import { StorageService } from '../../../utils/local-storage/local-storage.service';

@Component({
  selector: 'j-blog',
  standalone: true,
  imports: [CommonModule],
  providers: [PostService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  protected cookieKey: string = 'latestPost';

  latestPost$ = signal<Observable<any[]> | null>(null);

  constructor(
    @Inject(PostService) private postService: PostService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.listenLatestPost();
  }

  listenLatestPost() {
    const postsOnLocalStorage = this.storageService.getItem(this.cookieKey);

    if (!!postsOnLocalStorage && postsOnLocalStorage.length > 0) {
      const posts = JSON.parse(postsOnLocalStorage);

      return this.latestPost$.update(() => of(posts));
    }

    this.postService.findAllPosts().then(async (posts) => {
      await this.storageService.setItem(this.cookieKey, JSON.stringify(posts));

      this.latestPost$.update(() => of(posts));
    });
  }

  removeHtmlTags(text: string): string {
    return text ? text.replace(/<\/?[^>]+(>|$)/g, '') : '';
  }
}

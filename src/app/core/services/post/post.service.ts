import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { findAllDocuments } from '../../../shared/functions/findAllDocuments.function';
import { findOneDocument } from '../../../shared/functions/findOneDocument.function';
import { createNewDocument } from '../../../shared/functions/createDocument.function';

@Injectable()
export class PostService {
  constructor() {}

  async findAllPosts<T>() {
    return await (<Promise<T[]>>findAllDocuments('posts'));
  }

  async findPostById(id: string) {
    return await findOneDocument('posts', id);
  }

  async createNewPost(post: Post) {
    return await createNewDocument<Post>('posts', post);
  }
}

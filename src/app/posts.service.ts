import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  posts:any[];

  constructor(private serverService: ServerService) { }

  getPosts() {
    this.serverService.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json())
      .map(posts => {
        return posts.map(this.normalizesPost);
      })
      .subscribe(posts => { this.posts = posts });
  }

  normalizesPost(post) {
    return Object.assign({}, post, {
      likeCount: 0
    });
  }

  updateLikeCount(id, likeCount) {
    const index = this.posts.findIndex(post => id === post.id);
    this.posts[index].likeCount = likeCount;
  }

}

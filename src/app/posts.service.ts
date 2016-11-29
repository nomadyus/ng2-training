import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PostsService {

  posts: any[];

  constructor(private serverService: ServerService, private userService: UserService) { }

  getPosts() {
    this.serverService.get('https://jsonplaceholder.typicode.com/posts')
      .map(this.normalizesPosts)
      .do(this.fetchUsers)
      .subscribe(posts => { this.posts = posts });
  }

  normalizesPost(post) {
    return Object.assign({}, post, {
      likeCount: 0
    });
  }

  normalizesPosts(posts) {
    return posts.map(this.normalizesPost);
  }

  fetchUsers(posts) {
    return posts => posts.array.forEach(post => {
      this.userService.getUser(post.userId)
    })
  }

  updateLikeCount(id, likeCount) {
    const index = this.posts.findIndex(post => id === post.id);
    this.posts[index].likeCount = likeCount;
  }

}

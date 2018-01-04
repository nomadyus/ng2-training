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
      .map(posts => this.normalizesPosts(posts))
      .do(posts => this.fetchUsers(posts))
      .subscribe(posts => { this.posts = posts });
  }

  getPost(id: number) {
    return this.serverService.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .map(post => this.normalizesPost(post))
      .do(post => this.fetchUser(post.userId))
  }

  normalizesPost(post) {
    return Object.assign({}, post, {
      likeCount: 0,
      date: new Date(Math.random() * (new Date()).getTime())
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

  fetchUser(id) {
    return this.userService.getUser(id);
  }

  updateLikeCount(id, likeCount) {
    const index = this.posts.findIndex(post => id === post.id);
    this.posts[index].likeCount = likeCount;
  }

  getFilteredPost(query: string) {
    if (!this.posts)
      return [];

    return this.posts.filter(post => {
      return post.title.toLowerCase().includes(query.toLowerCase())
    })
  }

}

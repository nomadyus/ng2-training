import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  query:string = '';

  constructor(private postsService:PostsService, private userService:UserService){
    this.postsService.getPosts();
    this.userService.getUsers();
  }

  getAuthorName(id) {
    return this.userService.users[id]? this.userService.users[id].name : 'N/A';
  }
}

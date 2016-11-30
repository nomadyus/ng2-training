import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'yus-app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  
  query:string = '';

  constructor(private postsService:PostsService, private userService:UserService){
    this.postsService.getPosts();
    this.userService.getUsers();
  }

  getAuthorName(id) {
    return this.userService.users[id]? this.userService.users[id].name : 'N/A';
  }

  ngOnInit() {
  }

}

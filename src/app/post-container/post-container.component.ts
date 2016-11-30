import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'yus-app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  post: any = {};

  constructor(private route: ActivatedRoute, private postsService: PostsService, private userService:UserService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.post = this.postsService.getPost(Number(params['id']));
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yus-app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title:string;
  @Input() body:string;

  likeCount: number = 0;

  addLike() {
    this.likeCount ++;
  }

  constructor() { }

  ngOnInit() {
  }

}

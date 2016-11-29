import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yus-app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title:string;
  @Input() body:string;

  @Input() likeCount: number = 0;
  @Output() likeCountChange: EventEmitter<number> = new EventEmitter();

  @Input() author:string;
  @Input() date:Date;

  addLike() {
    this.likeCountChange.emit(this.likeCount + 1);
  }

  constructor() { }

  ngOnInit() {
  }

}

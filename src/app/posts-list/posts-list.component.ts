import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yus-app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() posts:any[];

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'yus-app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  @Output() search:EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  submit(searchForm) {
    this.search.emit(searchForm.value.query);
  }

}

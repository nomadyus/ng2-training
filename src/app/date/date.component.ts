import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yus-app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  @Input() date:Date; 

  constructor() { }

  ngOnInit() {
  }

}

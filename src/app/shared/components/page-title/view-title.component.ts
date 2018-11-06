import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-title',
  templateUrl: './view-title.component.html',
  styleUrls: ['./view-title.component.css']
})
export class ViewTitleComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

}

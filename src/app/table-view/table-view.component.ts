import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  viewTitle: string = 'Brasileirão 2018';

  constructor() { }

  ngOnInit() {
  }

}

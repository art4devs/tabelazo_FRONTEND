import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  refreshPanel: boolean = false;
  namePanel: string = 'Situação até a rodada 33';

  constructor() { }

  ngOnInit() {
  }

}

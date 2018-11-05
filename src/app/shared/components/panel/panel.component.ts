import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() refreshPanel: boolean = true;
  @Input() name: string = '';

  constructor() { }

  ngOnInit() {
  }

}

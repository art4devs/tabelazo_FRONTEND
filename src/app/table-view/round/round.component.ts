import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  namePanel: string = 'Jogos da rodada 33';

  constructor() { }

  ngOnInit() {
  }

}

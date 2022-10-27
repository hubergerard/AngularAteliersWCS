import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {

  @Input()
  color: string = 'blue';

  @Input()
  message: string = 'Valider';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from 'src/app/models/kitten';

@Component({
  selector: 'app-unadopted-kitten-item',
  templateUrl: './unadopted-kitten-item.component.html',
  styleUrls: ['./unadopted-kitten-item.component.sass']
})
export class UnadoptedKittenItemComponent implements OnInit {

  @Input()
  kitten!: Kitten;

  constructor() { }

  ngOnInit(): void {
  }

}

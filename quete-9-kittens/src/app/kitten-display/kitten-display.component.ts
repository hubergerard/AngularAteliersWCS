import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-kitten-display',
  templateUrl: './kitten-display.component.html',
  styleUrls: ['./kitten-display.component.css']
})
export class KittenDisplayComponent implements OnInit {

  @Output()
  adopt: EventEmitter<Kitten> = new EventEmitter();

  @Input()
  kitten!: Kitten;

  displayDetails = false;

  @Input()
  displayAdoptButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  adoptKitten() {
    this.adopt.emit(this.kitten);
  }

}

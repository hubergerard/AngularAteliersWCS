import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-kitten-list',
  templateUrl: './kitten-list.component.html',
  styleUrls: ['./kitten-list.component.css']
})
export class KittenListComponent implements OnInit {

  @Input()
  kittens: Kitten[] = [];

  @Output()
  adopt: EventEmitter<Kitten> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  adoptKitten(kitten: Kitten): void {
    this.adopt.emit(kitten);
  }

}

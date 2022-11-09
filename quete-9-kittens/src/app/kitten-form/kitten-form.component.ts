import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-kitten-form',
  templateUrl: './kitten-form.component.html',
  styleUrls: ['./kitten-form.component.css']
})
export class KittenFormComponent implements OnInit {

  @Output()
  create: EventEmitter<Kitten> = new EventEmitter();

  kittenForm: Kitten = {
    name: '',
    race: '',
    birthday: new Date(),
    imgUrl: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  createKitten(): void {
    this.create.emit(this.kittenForm);
    this.kittenForm = {
      name: '',
      race: '',
      birthday: new Date(),
      imgUrl: ''
    }
  }

}

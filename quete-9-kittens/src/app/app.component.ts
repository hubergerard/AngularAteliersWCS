import { Component } from '@angular/core';
import { Kitten } from './models/kitten';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quete-9-kittens';

  kittens: Kitten[] = [
    { name: 'Felix', race: 'Persan', imgUrl: 'https://placekitten.com/200/200', birthday: new Date(2011, 0, 31)},
    { name: 'Berlioz', race: 'Chat', imgUrl: 'https://placekitten.com/g/200/200', birthday: new Date(2020, 0, 12)},
  ]

  adoptedKittens: Kitten[] = [];

  addKittenToList(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  addKittenToAdoptedList(kitten: Kitten) {
    this.adoptedKittens.push(kitten);
    this.kittens.splice(this.kittens.indexOf(kitten), 1);
  }
}

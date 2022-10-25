import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  user: User = new User('John Doe', '', 28, 'http://placekitten.com/200/300');

  constructor() {}

  ngOnInit(): void {}

  printQuote(): void {
    this.user.printUser();
  }
}

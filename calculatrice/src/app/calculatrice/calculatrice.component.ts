import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css'],
})
export class CalculatriceComponent {
  nb1 = 0;
  nb2 = 0;

  result!: number;

  constructor() {}

  generateFirstNumber(): void {
    this.nb1 = Math.round(Math.random() * 10);
  }

  generateSecondNumber(): void {
    this.nb2 = Math.round(Math.random() * 10);
  }

  add(): void {
    this.result = this.nb1 + this.nb2;
  }

  substract(): void {
    this.result = this.nb1 - this.nb2;
  }

  multiply(): void {
    this.result = this.nb1 * this.nb2;
  }

  divide(): void {
    this.result = this.nb1 / this.nb2;
  }
}

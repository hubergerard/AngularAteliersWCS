import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  name: string = 'defaultButton';

  @Output()
  buttonHasBeenClicked: EventEmitter<string> = new EventEmitter();

  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendHasBeenClicked(): void {
    this.buttonHasBeenClicked.emit(this.name);
    this.disabled = true;
  }

}

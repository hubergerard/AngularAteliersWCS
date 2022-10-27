import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonsClicked: string[] = [];
  buttonNames: string[] = ['bouton1', 'bouton2', 'bouton3', 'bouton4', 'bouton5', 'toto'];

  receiveButtonName(event: string): void {
    console.log(event);
    if(!this.buttonsClicked.includes(event)) {
      this.buttonsClicked.push(event);
    }
  }
}

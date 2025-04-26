import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  monster1!: Monster;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "My Monster";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°001 Monster";
    this.monster1.attackName = "Geo Impact";
    this.monster1.attackStrength = 60;
    this.monster1.attackDescription = "This is a description of the attack. It can be very long and detailed, but it should not be too long to fit in the card.";
  }
}

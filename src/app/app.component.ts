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
  monster2!: Monster;
  monster3!: Monster;
  monster4!: Monster;
  monster5!: Monster;
  monster6!: Monster;
  monster7!: Monster;
  monster8!: Monster;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Lucario";
    this.monster1.hp = 80;
    this.monster1.figureCaption = "N°001 Lucario";
    this.monster1.attackName = "Full Impact";
    this.monster1.attackStrength = 100;
    this.monster1.attackDescription = "This is a description of the attack. It can be very long and detailed, but it should not be too long to fit in the card.";
    this.monster1.imageUrl = 'assets/img/Lucario.jpg';

    this.monster2 = new Monster();
    this.monster2.name = "Lugia";
    this.monster2.hp = 100;
    this.monster2.figureCaption = "N°002 Lugia";
    this.monster2.attackName = "Bombo Impact";
    this.monster2.attackStrength = 150;
    this.monster2.attackDescription = "This is another description of the attack.";
    this.monster2.imageUrl = 'assets/img/lugia.png';

    this.monster3 = new Monster();
    this.monster3.name = "Mewtwo";
    this.monster3.hp = 130;
    this.monster3.figureCaption = "N°003 Mewtwo";
    this.monster3.attackName = "Full Impact";
    this.monster3.attackStrength = 250;
    this.monster3.attackDescription = "This is a description of the attack. It can be very long and detailed, but it should not be too long to fit in the card.";
    this.monster3.imageUrl = 'assets/img/Mewtwo.png';

    this.monster4 = new Monster();
    this.monster4.name = "Entei";
    this.monster4.hp = 500;
    this.monster4.figureCaption = "N°004 Entei";
    this.monster4.attackName = "Entei Impact";
    this.monster4.attackStrength = 500;
    this.monster4.attackDescription = "This is another description of the attack.";
    this.monster4.imageUrl = 'assets/img/Entei.jpg';

    this.monster5 = new Monster();
    this.monster5.name = "Palkia";
    this.monster5.hp = 1000;
    this.monster5.figureCaption = "N°005 Palkia";
    this.monster5.attackName = "Palk Impact";
    this.monster5.attackStrength = 800;
    this.monster5.attackDescription = "This is a description of the attack. It can be very long and detailed, but it should not be too long to fit in the card.";
    this.monster5.imageUrl = 'assets/img/palkia.png';

    this.monster6 = new Monster();
    this.monster6.name = "Suicune";
    this.monster6.hp = 250;
    this.monster6.figureCaption = "N°006 Suicune";
    this.monster6.attackName = "Bombo Impact";
    this.monster6.attackStrength = 500;
    this.monster6.attackDescription = "This is another description of the attack.";
    this.monster6.imageUrl = 'assets/img/Suicune.png';

    this.monster7 = new Monster();
    this.monster7.name = "Sulfura";
    this.monster7.hp = 400;
    this.monster7.figureCaption = "N°007 Sulfura";
    this.monster7.attackName = "Full Impact";
    this.monster7.attackStrength = 300;
    this.monster7.attackDescription = "This is a description of the attack. It can be very long and detailed, but it should not be too long to fit in the card.";
    this.monster7.imageUrl = 'assets/img/sulfura.png';

    this.monster8 = new Monster();
    this.monster8.name = "Zacian";
    this.monster8.hp = 160;
    this.monster8.figureCaption = "N°008 Zacian";
    this.monster8.attackName = "Bombo Impact";
    this.monster8.attackStrength = 200;
    this.monster8.attackDescription = "This is another description of the attack.";
    this.monster8.imageUrl = 'assets/img/zacian.png';
  }
}

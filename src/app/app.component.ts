import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  Heroes = [new Hero(1,'比尔盖茨'), new Hero(2,'扎克伯格'), new Hero(3,'乔布斯'),new Hero(4,'麦克莫汉')]
  myHero = this.Heroes[0];
  myHeroes = this.Heroes;
}

export class Hero {
  private _id: number;
  private _name: string;

  constructor(public id: number,public name: string) {
    this._id = id;
    this._name = name;
  }
}

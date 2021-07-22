import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
 heroes:Hero[] = [];
  user: string = "Guest"; //change to a user object
  activeHero?:Hero;
  constructor() { }

  ngOnInit(): void {
  }
  createHero(){
    let newHero:Hero = {
  
      classType: "X",
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      charisma: 0,
      wisdom: 0,
      willpower: 0,
      constitution: 0,
      name: "Unsaved Hero",
      race: "X",
      gender: "X",
      hairColor: "X",
      eyeColor: "X",
      skinTone: "X",
    }
    this.heroes.push(newHero);
    //this hero needs to be added to the service info... so it doesnt dissappear

  }
  selectHero(her:Hero){
    this.activeHero = her;
  }

}

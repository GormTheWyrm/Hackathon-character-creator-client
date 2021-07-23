import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Hero } from '../Hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  //@Input()
  remaining:number = 20; 
  valid:boolean = false; 

  hero:Hero = {
  classType: "class",
  username: '', 
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  charisma: 0,
  wisdom: 0,
  willpower: 0,
  constitution: 0,
  name: "name",
  race: "race",
  gender: "gender",
  hairColor: "hair color",
  eyeColor: "eye color",
  skinTone: "skin tone",
}
isSaved: boolean = false; //we want this to change to false when user changes data 
// and change to true when http request works...


  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.hero.username = localStorage.getItem("username"); 
  }

  adjustRemaining() { 
    this.remaining = 20 - (this.hero.strength + this.hero.dexterity + this.hero.willpower
       + this.hero.wisdom + this.hero.intelligence + this.hero.charisma + this.hero.constitution); 
    if (this.remaining == 0) { 
      this.valid = true; 
    } else { 
      this.valid = false; 
    }
  }

  goBack() { 
    this.router.navigate(["/list"]);
  }

  saveCharacter() { 
    let newHero:Hero = new Hero(this.hero.classType, this.hero.username, this.hero.strength, this.hero.dexterity, this.hero.intelligence, this.hero.charisma,
        this.hero.wisdom, this.hero.willpower, this.hero.constitution, this.hero.name, this.hero.race, this.hero.gender, this.hero.hairColor,
        this.hero.eyeColor, this.hero.skinTone)
    console.log(newHero); 
    this.apiService.addNew(newHero).subscribe(res => {
      this.hero = res; 
    })
  }
}

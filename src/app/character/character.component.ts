import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Hero } from '../Hero';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  //@Input()
  remaining:number = 20; 
  valid:boolean = false; 
  newChar:boolean = true;

  //for randomization
  gender: string[] = ["Male", "Female"]; 
  eyes: string[] = ["Black", "Blue", "Green", "Red", "Hazel", "Yellow", "White"]; 
  skin: string[] = ["Dark", "Pale", "Tan"]; 
  class: string[ ]= ["Barbarian", "Wizard", "Monk", "Bard", "Warlock", "Figher", "Hunter", "Druid"]; 
  race: string[] = ["Human", "Elf", "Gnome", "Dwarf", "Tiefling", "Dragonborn"]; 
  hair: string[] = ["Blonde", "Brown", "White", "Black", "Green", "Red", "Purple", "Blue", "No"]; 
  malenames: string[] = ["Fulton", "Oskar", "Byron", "Julius", "Vardon", "Zunaohpas", "Xanderith", "Heliod" , "Wierich", "Jasdhir", "Myrtas"]; 
  fmalenames: string[] = ["Aerith", "Gisela", "Elicia", "Hanriette", "Margareta", "Laureline", "Brigitte", "Rea", "Amber", "Teresa", "Grace"]; 



  @Input()hero:Hero = {
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
    let id = this.apiService.recieveHeroId(); 
    if(id == 0) { 
      this.newChar = true; 
    } else { 
      this.newChar = false;
      let hero = this.apiService.recieveHero();
      if(hero != undefined) { 
        this.hero = hero; 
      }
    } 
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
    this.router.navigate(['/list']); 
  }

  updateCharacter() { 
    this.apiService.updateHero(this.hero).subscribe(res => {
      this.hero = res; 
    })
    this.router.navigate(['/list']); 
  }

  randomize() {
    this.remaining = 20;
    this.hero.strength = 0; 
    this.hero.dexterity = 0; 
    this.hero.intelligence = 0; 
    this.hero.charisma = 0; 
    this.hero.wisdom = 0; 
    this.hero.willpower = 0; 
    this.hero.constitution = 0; 

    this.hero.gender = this.gender[Math.floor(Math.random()*this.gender.length)];
    if(this.hero.gender == "Male") { 
      this.hero.name = this.malenames[Math.floor(Math.random()*this.malenames.length)]; 
    } else { 
      this.hero.name = this.fmalenames[Math.floor(Math.random()*this.fmalenames.length)];
    }
    this.hero.eyeColor = this.eyes[Math.floor(Math.random()*this.eyes.length)]; 
    this.hero.skinTone = this.skin[Math.floor(Math.random()*this.skin.length)]; 
    this.hero.classType = this.class[Math.floor(Math.random()*this.class.length)]; 
    this.hero.hairColor = this.hair[Math.floor(Math.random()*this.hair.length)]; 
    this.hero.race = this.race[Math.floor(Math.random()*this.race.length)]; 

    while (this.remaining !=0) { 
      let number = Math.floor(Math.random()*7); 
      if (number == 0) { 
        this.hero.strength+=1
      } else if (number == 1) { 
        this.hero.dexterity +=1;
      } else if (number == 2) { 
        this.hero.intelligence +=1; 
      } else if (number ==3) { 
        this.hero.charisma +=1;
      } else if (number ==4) { 
        this.hero.wisdom +=1; 
      } else if (number ==5) { 
        this.hero.willpower +=1; 
      } else if (number == 6) { 
        this.hero.constitution +=1; 
      }
      this.remaining-=1; 
    }
    this.valid = true; 
  }
}
// need to input hero from service...
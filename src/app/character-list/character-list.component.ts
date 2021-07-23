import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { ApiService } from '../api.service';
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
  username: any; 
  // herolist: any = []; 

  constructor(private heroservice: ApiService, private router:Router) {
  }
  

  ngOnInit(): void {
    this.username = localStorage.getItem("username"); 
    this.getHeroes(); 
  }

  getHeroes() { 
    this.heroservice.getHeroes(this.username).subscribe(res => {
      this.heroes = res; 
      console.log(this.heroes); 
    })
  }

  createNew() { 
    this.router.navigate(["/view"]); 
  }
  logout() { 
    localStorage.removeItem("username")
    localStorage.setItem("isLoggedIn", "false")
  }
  // createHero(){
  //   let newHero:Hero = {
  //     username: this.username,
  //     classType: "Bard",
  //     strength: 0,
  //     dexterity: 0,
  //     intelligence: 0,
  //     charisma: 0,
  //     wisdom: 0,
  //     willpower: 0,
  //     constitution: 0,
  //     name: "DEFAULT NAME",
  //     race: "BASIC HUMAN",
  //     gender: "EFFEMINITE ELF",
  //     hairColor: "NUT BROWN",
  //     eyeColor: "BLANK",
  //     skinTone: "PALE",
  //   }
  //   this.heroes.push(newHero);
  //   this.activeHero = newHero;
  //   //this hero needs to be added to the service info... so it doesnt dissappear

  // }
  selectHero(her:Hero){
    this.activeHero = her;
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Hero } from '../Hero';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  //@Input()
hero:Hero = {
  
  classType: "",
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  charisma: 0,
  wisdom: 0,
  willpower: 0,
  constitution: 0,
  name: "",
  race: "",
  gender: "",
  hairColor: "",
  eyeColor: "",
  skinTone: "",
}
isSaved: boolean = false; //we want this to change to false when user changes data 
// and change to true when http request works...


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}

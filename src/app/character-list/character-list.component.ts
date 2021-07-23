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

  username: any; 
  herolist: any = []; 

  constructor(private heroservice: ApiService, private router:Router) {
  }
  

  ngOnInit(): void {
    this.username = localStorage.getItem("username"); 
    this.getHeroes(); 
  }

  getHeroes() { 
    this.heroservice.getHeroes(this.username).subscribe(res => {
      this.herolist = res; 
      console.log(this.herolist); 
    })
  }

  createNew() { 
    this.router.navigate(["/view"]); 
  }
  logout() { 
    localStorage.removeItem("username")
    localStorage.setItem("isLoggedIn", "false")
  }

}

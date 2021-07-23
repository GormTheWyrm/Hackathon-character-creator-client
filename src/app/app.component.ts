import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false; 
  title = 'client';

  constructor() {}
  ngAfterContentChecked(){
    if (localStorage.getItem("isLoggedIn") == "true") { 
      this.isLoggedIn = true; 
    } else { 
      this.isLoggedIn = false; 
    }
  }
}

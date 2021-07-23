import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ''; 

  constructor(private router:Router) {}
  ngOnInit(): void {
    if (localStorage.getItem("isLoggedIn") =="true") { 
      this.router.navigate(['/list']); 
    }
  }

  login() { 
    localStorage.setItem("username", this.username); 
    localStorage.setItem("isLoggedIn", "true");
    this.router.navigate(["/list"]); 
  }

}

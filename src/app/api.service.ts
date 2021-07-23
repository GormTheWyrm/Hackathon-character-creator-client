import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUrl = 'http://localhost:8080/heroes/';
  constructor(private http: HttpClient) { }

  getHeroes(username: String): Observable<any[]> { 
    return this.http.get<any[]>(this.baseUrl + username)
  }

  addNew(newHero: Hero): Observable<any> {
    console.log(this.baseUrl + "add"); 
    return this.http.post(this.baseUrl + 'add', newHero)
  }

  updateHero(updatedHero: Hero): Observable<any> { 
    return this.http.put<any>(this.baseUrl + "update", updatedHero)
  }
}

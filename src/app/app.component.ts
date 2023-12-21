import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-videojuegos';

  constructor(private router: Router, private loginService:LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDlZSPnGEC8WNcwUTciuJCc8lng-exCafo",
      authDomain: "videojuegos-8979b.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
}

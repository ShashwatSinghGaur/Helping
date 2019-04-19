import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-logindonator',
  templateUrl: './logindonator.component.html',
  styleUrls: ['./logindonator.component.css']
})
export class LogindonatorComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  onLogin(loginForm)
  {
    this.route.navigate(['/options']);
  }
}
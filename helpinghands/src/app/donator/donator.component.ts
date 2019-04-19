import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.css']
})
export class DonatorComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }
  
  onSignup(signupForm)
  {
    this.route.navigate(['/logingen']);
  }



}

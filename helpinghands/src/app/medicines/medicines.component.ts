import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  onSignup(signupForm)
  {
    this.route.navigate(['/options']);
  }

}
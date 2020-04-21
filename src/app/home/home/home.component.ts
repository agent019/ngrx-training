import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Welcome to the music database.
    </p>
    <a [routerLink]="['/', 'songs']">
      View Songs!
    </a>
  `,
  styles: [
    `
      :host { display: flex; }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>Music Database</h1>
    </header>
  `,
  styles: [
    `
      header {
        width: 100%;
        padding: 20px;
        background-color: #eee;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <p>about page</p>
    <app-about-info></app-about-info>
    <app-client></app-client>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}

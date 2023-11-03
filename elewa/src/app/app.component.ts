import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` 
    <app-client></app-client>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}

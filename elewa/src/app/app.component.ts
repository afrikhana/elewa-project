import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` 
  <div class='header'>
    <app-client></app-client>
  </div> 

  <app-about></app-about>
  
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}

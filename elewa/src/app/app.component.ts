import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` 
  <div class='header'>
    <nav>
      <a routerLink="/about" routerLinkActive="active" >{{about}}</a>
      <a routerLink="/social" routerLinkActive="active" >{{social}}</a>
      <a routerLink="/invest" routerLinkActive="active" >{{invest}}</a>
    </nav>
  </div>
  
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public about = 'About';
  public social = 'Social';
  public invest = 'Invest';
}

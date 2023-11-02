import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  template: `

        <div class="header">
          <div id="logo">
            <app-logo></app-logo>
          </div>
        <nav>
            <a routerLink="/about" routerLinkActive="active" >{{about}}</a>
            <a routerLink="/social" routerLinkActive="active" >{{social}}</a>
            <a routerLink="/invest" routerLinkActive="active" >{{invest}}</a>
          </nav>
        </div>
        <div class="line-header"></div>
   
  `,
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  public about = 'About';
  public social = 'Social';
  public invest = 'Invest';
  
}

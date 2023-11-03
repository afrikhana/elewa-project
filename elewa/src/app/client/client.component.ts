import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  template: `

        <div class="header">
          <div id="logo">
            <app-logo></app-logo>
          </div>
        <nav>
            <a routerLink="about"  >{{about}}</a>
            <a routerLink="social"  >{{social}}</a>
            <a routerLink="invest" >{{invest}}</a>
            <app-drop-down-button id='drop'></app-drop-down-button>
          </nav>
          
        </div>
        <div class="line-header"></div>
        
        <router-outlet></router-outlet>
   
  `,
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  public about = 'About';
  public social = 'Social';
  public invest = 'Invest';
  
}

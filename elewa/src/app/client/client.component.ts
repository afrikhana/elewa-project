import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  template: `

        <div class="header">
          <div id="logo">
            <img src={{logo}} alt="elewa-logo">
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
  public logo = 'https://res.cloudinary.com/ddei3mzex/image/upload/v1698922465/Logo_White_arvoyx_h9kx9y.svg'
}

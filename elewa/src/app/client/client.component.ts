import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  template: `
    <nav>
      <a routerLink="/about" routerLinkActive="active" >{{about}}</a>
      <a routerLink="/social" routerLinkActive="active" >{{social}}</a>
      <a routerLink="/invest" routerLinkActive="active" >{{invest}}</a>
    </nav>

  `,
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  public about = 'About';
  public social = 'Social';
  public invest = 'Invest';
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img src={{logo}} alt="elewa-logo">
  `,
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  public logo = 'https://res.cloudinary.com/ddei3mzex/image/upload/v1698922465/Logo_White_arvoyx_h9kx9y.svg'
}

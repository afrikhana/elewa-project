import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-info',
  template: `
    <p>
      about-info works!
    </p>
  `,
  styleUrls: ['./about-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutInfoComponent {

}

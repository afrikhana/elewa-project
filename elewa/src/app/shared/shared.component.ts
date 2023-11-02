import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  template: `
    <p>
      shared works!
    </p>
  `,
  styleUrls: ['./shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent {

}

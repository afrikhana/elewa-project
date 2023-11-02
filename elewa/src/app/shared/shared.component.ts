import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  template: `
    <p>
      shared works!
    </p>
  `,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent {

}

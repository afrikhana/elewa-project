import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  template: `
    <p>
      ui works!
    </p>
  `,
  styleUrls: ['./ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiComponent {

}

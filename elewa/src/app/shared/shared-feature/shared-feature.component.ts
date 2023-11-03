import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shared-feature',
  template: `
    <p>
      shared-feature works!
    </p>
  `,
  styleUrls: ['./shared-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedFeatureComponent {

}

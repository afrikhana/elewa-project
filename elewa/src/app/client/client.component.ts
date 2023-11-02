import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-client',
  template: `
    <p>
      client works!
    </p>
  `,
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent {

}

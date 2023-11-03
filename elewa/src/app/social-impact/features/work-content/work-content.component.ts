import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-work-content',
  template: `
        <div class="main-display">
        <div id="item1">
            <h1>733+</h1>
            <p>People trained</p>
          </div>
          <div id="item2">
            <h1>733k</h1>
            <p>careers launched</p>
          </div>
          <div id="item3">
            <h1>200+</h1>
            <p>projects finisehd</p>
          </div>
          <div id="item4">
            <h1>56</h1>
            <p>Investors</p>
          </div>
        </div>
          
  `,
  styleUrls: ['./work-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkContentComponent {

}

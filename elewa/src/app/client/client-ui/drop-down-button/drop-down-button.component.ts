import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-button',
  template: `
   <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Drop
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  `,
  styleUrls: ['./drop-down-button.component.scss'],
})
export class DropDownButtonComponent {
  
}

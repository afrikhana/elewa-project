import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-info',
  template: `
  <!-- about information on bottom page -->
   <div class="about-info">
    <!-- details/ describtions on headquaters,contact,navigation,brands and privacy -->
    <div class="line">
      <!-- this is the white line passing above the content -->
    </div>
    <div class="details">
    <div id='headquaters'>
      <h1>Headquaters</h1>
        <p>The Promenade, 19 General <br>Mathenge Rd<br>Nairobi,kenya
      </p>
    </div>
    <div id='contact-dec'>
      <h1>Contact</h1>
      <p>T +254 78 92 27 755</p>
      <p>E info@elewa.ke</p>
    </div>
    <div id='Navigation'>
      <h1>Navigation</h1>
      <a>About</a>
      <a>Social</a>
      <a>Invest</a>
    </div>
    <div id='Brands'>
      <h1>Brands</h1>
      <P>Elewa</P>
      <p>Italanta</p>
      <p>venture labs</p>
    </div>
    <div id='Privacy'>
      <h1>Privacy</h1>
      <p>Terms and conditions</p>
      <p>Cookie preferences</p>
    </div>
    </div>
   </div>
   <div class="my-links">
    <app-social-links></app-social-links>
   </div>
   <div class="my-footer-logo">
    <app-logo></app-logo>
   </div>

  `,
  styleUrls: ['./about-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutInfoComponent {
    
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  template: `
    <div class="links">
      <img id='facebook' [src]="facebook" alt="facebook">
      <img id='insta' [src]='instagram' alt="instagram">
      <img id='linked-in' [src]="linkedin" alt="linked-in">
    </div>
  `,
  styleUrls: ['./social-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialLinksComponent {
 instagram:String='https://blog.hootsuite.com/wp-content/uploads/2018/09/glyph-logo_May2016-150x150.png';
 facebook:String='https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/flogo-RGB-HEX-Blk-58.png';
 linkedin:String='https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/In-Black-54px-R.png';
}

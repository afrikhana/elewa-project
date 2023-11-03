import { Component } from '@angular/core';

@Component({
  selector: 'app-social-impact',
  template: `
  <!-- contains display picture and content -->
   <div class='social-header-components'>   
              <div class='social-container'>
                  <img id='chains' src={{image}} alt="chains">
                  <div id='content'>
                    <p>Scaling impact. Beyond the norm</p>
                    <h1>Human and Environmental Impact <br>through Social Enterprise</h1>
                  </div>
                  <div id="display-work-content">
                    <app-work-content></app-work-content>
                  </div>
                  <div id='business-for-win'>
                    <img src="" alt="">
                    <div class="business-content">
                      <h1>(Social) business for the win</h1>
                      <p>with a young dynamic population that is eager to <br>contribution to the global economy, East Africa has a <br>
                    lot to offer to the world. Now is the time to nature <br>sustainable, inclusive and scalable business.The rest <br>will take care of itself.</p>
                    </div>
                  </div>
              </div>
   </div>
    <!-- <app-about-info></app-about-info> -->
  `,
  styleUrls: ['./social-impact.component.scss']
})
export class SocialImpactComponent {
       public image = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg'
       
}

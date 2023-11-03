import { Component } from '@angular/core';

@Component({
  selector: 'app-social-impact',
  template: `
  <!-- contains display picture and content -->
   <div class='social-header-components'>   
    <!-- first intro to a page display -->
              <div class='social-container'>
                  <img id='chains' src={{image}} alt="chains">
                  <div id='content'>
                    <p>Scaling impact. Beyond the norm</p>
                    <h1>Human and Environmental Impact <br>through Social Enterprise</h1>
                  </div>
                  <div id="display-work-content">
                    <!-- displays work flow/ records of past achievements -->
                    <app-work-content></app-work-content>
                  </div>
<!-- second intro on social business -->
                  <div class='business-for-win'>
                    <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg" alt="lady">
                    <div class="business-content">
                      <h1>(Social) business for the <br>win</h1>
                      <p>with a young dynamic population that is eager to <br>contribution to the global economy, East Africa has a <br>
                    lot to offer to the world. Now is the time to nature sustainable,<br> inclusive and scalable business.The rest will take care of<br> itself.</p>
                    </div>
                  </div>
<!-- third intro based on cooperation -->
                    <div class="cop-mindset">
                      <div id="mind-content">
                        <h1>A cooperative <br>mindset</h1>
                        <p>Elewa has one shared objective; To unlock the true <br>potential of individuals, teams, and the community.<br> We 
                        believe strongly in the power of sharing ideas <br>and  continously strive to grow each other and <br>ourselves. Internally, but also withing the large <br>communities in which
                      we are active.</p></div>
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg" alt="buffalo">
                      
                    </div>
<!-- forth intro based on beyond business -->
                    <div class="beyond-business">
                    <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png" alt="kids">
                      <div id="beyond-content">
                          <h1>Beyond business</h1>
                          <p>We channel a good amount of our resources into giving <br>back. <br>
                              <br>Through projects such as our coding school in Kakuma <br> refugee camp, training teachers in pastoral Samburu and <br>
                              our open-source coding initiatives providing entry-level <br> opportunities to hundreds of junior engineers <br><br>These projects dont necessarily have an immediate <br>
                              financial return, but their impact can be tangibly <br>measured in the long-term. 
                          </p>
                      </div>
                    </div>
<!-- fifth intro based on open knowledge -->
                    <div class='open-knowledge'>
                      <div id='open-content'>
                        <h1>Open knowledge</h1>
                        <p>what we learn, we share. Through community events, <br>open knowledge repositories, regular teaching moments <br>
                        (everyone is a teacher) and academic partnerships. <br><br>We build for today, with aaaaaaa lens on tomorrow.
                      </p>
                      </div>
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png" alt="co-founder">
                    </div>
<!-- sicth intro based on missions and companies/slideshow -->
                    <div class='before-footer'>
                      <h1 id="h-one">Some of our impact projects</h1>
                      <div id="slide-show-container">
                          <div id="slide-show">
                          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380443/elewa-group-website/client-logos/ms-adc_y96dms.jpg" alt="microsoft">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380412/elewa-group-website/client-logos/Spotlights_7_pplnvm.jpg" alt="spotlights">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/Kenya_Scouts_Association_kcoka5.svg" alt="kenya=scouts">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/wwf-4-logo-png-transparent_tbkfcq.png" alt="panda">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg" alt="Rwanda">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png" alt="farmbetter">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/it_volk_black_logo_image_iowrws.png" alt="volk">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/hoplit-logo_nsryy7.webp" alt="client-logo">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/2017-GIZ-Logo_htdnpa.png" alt="giz">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/Enabel-logo_afiel7.png" alt="Enable">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/syndicyourself_logfo_qiqrex.png" alt="sydanic">
                        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/adc-logo_dgxpul.jpg" alt="africa">
                          </div>
                      </div>
                      
                      <h1 id="h-two">Become part of our mission <br> and <span>join elewa.</span></h1>
                    </div>
                  
              </div>
              <app-about-info></app-about-info>
   </div>
    <!--  -->
  `,
  styleUrls: ['./social-impact.component.scss']
})
export class SocialImpactComponent {
       public image = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg'

}

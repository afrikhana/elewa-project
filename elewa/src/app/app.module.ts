import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';
import { SharedComponent } from './shared/shared.component';
import { AboutInfoComponent } from './shared/about-info/about-info.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SocialImpactComponent,
    AboutComponent,
    InvestComponent,
    SharedComponent,
    AboutInfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ClientComponent,
    SharedComponent,
    AboutInfoComponent,
    NavbarComponent
  ]
})
export class AppModule { }

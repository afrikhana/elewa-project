import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';
import { FeaturesComponent } from './social-impact/features/features.component';
import { UiComponent } from './social-impact/ui/ui.component';
import { SharedComponent } from './shared/shared.component';
import { AboutInfoComponent } from './shared/about-info/about-info.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './client/client.component';
import { UiComponent } from './ui/ui.component';
import { LogoComponent } from './ui/logo/logo.component';
import { SocialLinksComponent } from './ui/social-links/social-links.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialImpactComponent,
    AboutComponent,
    InvestComponent,
    FeaturesComponent,
    UiComponent,
    SharedComponent,
    AboutInfoComponent,
    ClientComponent,
    UiComponent,
    LogoComponent,
    SocialLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ClientComponent,
    FeaturesComponent,
    UiComponent,
    SharedComponent,
    AboutInfoComponent,
    ClientComponent,
    UiComponent,
    LogoComponent,
    SocialLinksComponent,
  ]
})
export class AppModule { }

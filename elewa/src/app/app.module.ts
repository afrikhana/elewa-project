import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';
import { SharedComponent } from './shared/shared.component';
import { AboutInfoComponent } from './shared/about-info/about-info.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SocialImpactComponent,
    AboutComponent,
    InvestComponent,
    SharedComponent,
    AboutInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SharedComponent,
    AboutInfoComponent,
  ]
})
export class AppModule { }

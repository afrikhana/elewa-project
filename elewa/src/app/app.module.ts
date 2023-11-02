import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SocialImpactComponent,
    AboutComponent,
    InvestComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ClientComponent
  ]
})
export class AppModule { }

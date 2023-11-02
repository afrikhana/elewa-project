import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';
import { FeaturesComponent } from './social-impact/features/features.component';
import { UiComponent } from './social-impact/ui/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SocialImpactComponent,
    AboutComponent,
    InvestComponent,
    FeaturesComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ClientComponent,
    FeaturesComponent,
    UiComponent
  ]
})
export class AppModule { }

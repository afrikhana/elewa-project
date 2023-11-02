import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SocialImpactComponent } from './social-impact/social-impact.component';
import { InvestComponent } from './invest/invest.component';

const routes: Routes = [
  {
    path:'about', component:AboutComponent
  },
  {
    path:'social', component:SocialImpactComponent
  },
  {
    path:'invest', component:InvestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

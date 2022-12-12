import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {NgModule} from "@angular/core";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: PrivacyPolicyComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

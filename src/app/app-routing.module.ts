import { RouterModule, Routes } from "@angular/router";
import { ImpressumComponent } from "./impressum/impressum.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { NgModule } from "@angular/core";
import { EventEditComponent } from "./events/event-edit/event-edit.component";
import { EventComponent } from "./events/event/event.component";
import { EventNewComponent } from "./events/event-new/event-new.component";
import { WelcomeComponent } from "./welcome/welcome.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: PrivacyPolicyComponent },
  { path: 'new', component: EventNewComponent },
  { path: 'edit/:id', component: EventEditComponent },
  { path: ':id', component: EventComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

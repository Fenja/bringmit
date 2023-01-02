import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { NgModule } from "@angular/core";
import { EventEditComponent } from "./events/event-edit/event-edit.component";
import { EventComponent } from "./events/event/event.component";

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: PrivacyPolicyComponent },
  { path: 'edit/:id', component: EventEditComponent },
  { path: ':id', component: EventComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

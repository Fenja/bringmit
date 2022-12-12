import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventComponent } from './events/event/event.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AppRoutingModule } from "./app-routing.module";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EventComponent,
    EventEditComponent,
    FooterComponent,
    ImpressumComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),

    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { EventNewComponent } from './events/event-new/event-new.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EventComponent,
    EventEditComponent,
    FooterComponent,
    ImpressumComponent,
    PrivacyPolicyComponent,
    EventNewComponent
  ],
    imports: [
        AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
        BrowserAnimationsModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,

        HttpClientModule,

        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatSortModule,
        MatIconModule,
        MatSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

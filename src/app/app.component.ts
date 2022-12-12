import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // TODO environment file -> do not push

};

const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bringmit';

}

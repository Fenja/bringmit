import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(
    private router: Router,
  ) { }

  navigateToNewEvent() {
    this.router.navigate(['/new']).then();
  }

  navigateToEditEvent(id: string) {
    // TODO handling invalid id
    this.router.navigate(['/edit/'+id]).then();
  }

}

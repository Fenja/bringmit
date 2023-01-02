import { Component, OnInit } from '@angular/core';
import {EventModel} from "../models/event.model";
import {EventService} from "../events/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToNewEvent() {
    const event: EventModel = this.eventService.createNewEvent();
    this.router.navigate(['/edit/' + event.uid]).then();
  }

}

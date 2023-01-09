import { Component, OnInit } from '@angular/core';
import { EventModel } from "../../models/event.model";
import {EventService} from "../event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent implements OnInit {

  event: EventModel;

  defaultDescription: String = "Hier kommt die Standardbeschreibung";

  constructor(
    private eventService: EventService,
    private router: Router,
  ) {
    this.event = this.eventService.createNewEvent();
  }

  ngOnInit(): void {
  }

  saveEvent() {
    this.eventService.saveEvent(this.event).subscribe((response) => {
      this.router.navigate(['/' + response.name]).then(
          // TODO show popup with link
        );
      },
      error => {
        console.log(error);
        // TODO popup
      }
    );
  }
}

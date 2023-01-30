import { Component, OnInit } from '@angular/core';
import { EventModel } from "../../models/event.model";
import {EventService} from "../event.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NewEventDialog} from "./new-event-dialog/new-event-dialog.component";

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
    public dialog: MatDialog,
  ) {
    this.event = this.eventService.createNewEvent();
  }

  ngOnInit(): void {
  }

  saveEvent() {
    this.eventService.saveEvent(this.event).subscribe((response) => {
      console.log(response);
        this.openNewEventDialog(response.name)
      },
      error => {
        console.log(error);
        // TODO popup
      }
    );
  }

  openNewEventDialog(eventId: string): void {
    const dialogRef = this.dialog.open(NewEventDialog, {
      data: {id: eventId},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      this.router.navigate(['/' + eventId]).then();
    });
  }
}

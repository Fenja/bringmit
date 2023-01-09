import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { take } from "rxjs/operators";
import { EventService } from "../event.service";
import { EventModel } from "../../models/event.model";

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  event!: EventModel;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)
    ).subscribe(
      (params: Params) => {
        const id = params['id'];
        if (!!id) {
          this.eventService.getEventById(id).subscribe(event => {
            this.event = event;
            this.event.id = id;
          });
        } else {
          console.log('No event found');
          this.router.navigate(['/welcome']).then(() => {
            // TODO popup
          });
        }
      }
    )
  }

  saveEvent() {
    this.eventService.editEvent(this.event).subscribe(() => {
      this.router.navigate(['/' + this.event.id]).then(() => {
        // TODO popup
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {EventModel} from "../../models/event.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EventService} from "../event.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

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
          });
        } else {
          console.log('No event found');
          this.router.navigate(['/']).then(() => {
            // TODO popup
          });
        }
      }
    )
  }

}

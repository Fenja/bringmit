import { Component, OnInit } from '@angular/core';
import { EventModel } from "../../models/event.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { EventService } from "../event.service";
import {filter, take, tap} from "rxjs/operators";
import { EntryModel } from "../../models/entry.model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event?: EventModel;
  displayedColumns: string[] = [ 'name','entry', 'category', 'actions'];
  emptyItem = {
    name: '',
    entry: '',
    category: '',
  };
  item: EntryModel = this.emptyItem;
  tmpItem?: EntryModel;
  id?: string;

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
          this.id = id;
          this.eventService.getEventById(id)
            .pipe(
              filter((event) => !!event)
            )
            .subscribe(event => {
            this.event = event;
            this.event!.id = id;
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

  saveItem() {
    if (!this.event) return;

    if (this.event!.entries === undefined) {
      this.event!.entries = [];
    }

    if (this.tmpItem === undefined) {
      this.event!.entries.push(this.item);

    } else {
      let index = this.event!.entries.findIndex(item => item.name === this.tmpItem!.name && item.entry === this.tmpItem!.entry && item.category === this.item!.category);
      this.event!.entries[index] = this.item;
      console.log(JSON.stringify(this.event!.entries[index]));
    }

    this.eventService.editEvent(this.event!)
      .pipe(
        tap(() => console.log('editEvent')),
        take(1)
      )
      .subscribe(() => {
        this.eventService.getEventById(this.id!)
          .pipe(take(1))
          .subscribe(
          (event) => {
            this.event = event;
            this.item = this.emptyItem;
          }
      )
    });
    this.tmpItem = undefined;
    // TODO only first edit works
    // whyyyy?´´-
  }

  editItem(element: EntryModel) {
    this.tmpItem = element;
    this.item = {
      name: element.name,
      entry: element.entry,
      category: element.category,
    };
  }

  deleteItem(element: EntryModel) {
    // TODO popup
    this.event!.entries = this.event!.entries.filter(item => item !== element);
    this.eventService.editEvent(this.event!).subscribe(() => {
      this.item = this.emptyItem;
    });
  }

  cancel() {
    this.item = this.emptyItem;
    this.tmpItem = undefined;
  }
}

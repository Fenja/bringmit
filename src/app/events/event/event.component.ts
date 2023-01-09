import { Component, OnInit } from '@angular/core';
import { EventModel } from "../../models/event.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { EventService } from "../event.service";
import { filter, take } from "rxjs/operators";
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
          this.eventService.getEventById(id)
            .pipe(
              filter((event) => !!event)
            )
            .subscribe(event => {
            this.event = event;
            this.event!.id = id;
            console.log(this.event?.entries);
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

    if (!this.tmpItem) {
      this.event!.entries.push(this.item);

    } else {
      let index = this.event!.entries.findIndex(item => item === this.tmpItem);
      this.event!.entries[index] = this.item;
    }
    this.eventService.editEvent(this.event!).subscribe(() => {
      this.item = this.emptyItem;
    });
    this.tmpItem = undefined;
    // TODO template does not update
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

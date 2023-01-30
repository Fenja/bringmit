import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import {defaultCategories, EventModel} from "../models/event.model";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { EntryModel } from "../models/entry.model";

describe('EventService', () => {
  let service: EventService;
  let mockItem: EntryModel = {
    name: "Max",
    entry: "Schokokuchen",
    category: "Kuchen"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('creates new event', () => {
    let event: EventModel = service.createNewEvent();
    expect(event).toBeTruthy();
  });

  it('saves new event', () => {
    let event: EventModel = service.createNewEvent();
    service.saveEvent(event).subscribe(() => {
      expect(service.getEventById(event.id!)).toBeTruthy();

    });
  });

  it('saves new entry to event', () => {
    let event: EventModel = service.createNewEvent();
    service.saveEvent(event).subscribe(() => {
      event.entries.push(mockItem);
      service.editEvent(event).subscribe(() => {
        service.getEventById(event.id!).subscribe((newEvent) => {

          expect(newEvent).toBeTruthy();
          expect(newEvent.entries).toEqual([mockItem]);
        });
      });
    });
  });

  it('adds default categories to new event', () => {
    let event: EventModel = service.createNewEvent();
    expect(event.categories).toBe(defaultCategories);
  });
});

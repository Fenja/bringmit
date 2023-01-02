import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import {EventModel} from "../models/event.model";

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('creates new event with uid', () => {
    let event: EventModel = service.createNewEvent();
    expect(event.uid).toBeTruthy();
  });
});

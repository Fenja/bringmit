import { Injectable } from '@angular/core';
import { EventModel } from "../models/event.model";
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  createNewEvent(): EventModel {
    return {
      categories: undefined,
      date: undefined,
      entries: undefined,
      description: "",
      title: "",
      uid: uuid.v4()
    }
  }
}

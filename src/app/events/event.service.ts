import { Injectable } from '@angular/core';
import { EventModel } from "../models/event.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, take } from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient,
  ) { }

  createNewEvent(): EventModel {
    return {
      categories: undefined,
      date: undefined,
      entries: undefined,
      description: "",
      title: "",
    }
  }

  getEventById(id: string): Observable<any> {
    return this.http.get<EventModel>(
      environment.FIREBASE_CONFIG.databaseURL + '/events/' + id + '.json'
    ).pipe(
      take(1),
      map((responseData) => {
        return responseData;
      })
    );
  }

  saveEvent(event: EventModel): Observable<any> {
    return this.http.post<any>(
      environment.FIREBASE_CONFIG.databaseURL + '/events.json',
      event
    );
  }

  editEvent(event: EventModel): Observable<any> {
    return this.http.patch<any>(
      environment.FIREBASE_CONFIG.databaseURL + '/events/' + event.id + '.json',
      {
        title: event.title,
        description: event.description,
        date: event.date,
      }
    );
  }
}

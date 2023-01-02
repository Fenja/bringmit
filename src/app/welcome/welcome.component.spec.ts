import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { Location } from "@angular/common";

import { WelcomeComponent } from './welcome.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { appRoutes } from "../app-routing.module";
import { EventService } from "../events/event.service";
import { EventModel } from "../models/event.model";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let location: Location;
  let router: Router;
  let eventService: EventService;

  let mockEvent: EventModel = {
    categories: undefined,
    date: undefined,
    description: "",
    entries: undefined,
    uid: '42',
    title: "mockEvent"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(appRoutes)],
      declarations: [ WelcomeComponent ],
      providers: [

      ]
    });
    eventService = TestBed.inject(EventService);

    router = TestBed.get(Router);
    location = TestBed.get(Location);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigates to edit new event on button click', fakeAsync (() => {
    spyOn(eventService, 'createNewEvent').and.returnValue(mockEvent);
    component.navigateToNewEvent();
    tick();
    expect(location.path()).toBe('/edit/' + mockEvent.uid);
  }));
});

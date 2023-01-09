import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import {EventModel} from "../../models/event.model";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatTableModule} from "@angular/material/table";

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let mockEvent: EventModel = {
    categories: [],
    date: undefined,
    description: "",
    entries: [],
    title: "This is a test"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, MatTableModule ],
      declarations: [ EventComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    component.event = mockEvent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has table', () => {
    let table = fixture.debugElement.nativeElement.querySelector('#table');
    expect(table).toBeTruthy();
  });

  it('displays message on undefined event', () => {
    component.event = undefined;
    fixture.detectChanges();
    let message = fixture.debugElement.nativeElement.querySelector('#message');
    expect(message).toBeTruthy();
  });
});

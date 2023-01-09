import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from "@angular/common";

import { WelcomeComponent } from './welcome.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { appRoutes } from "../app-routing.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(appRoutes), HttpClientTestingModule ],
      declarations: [ WelcomeComponent ],
    });

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

  it('navigates to create new event on button click', fakeAsync (() => {
    component.navigateToNewEvent();
    tick();
    expect(location.path()).toBe('/new');
  }));

  it('navigates to existing project by given id', fakeAsync(() => {
    component.navigateToEditEvent('42');
    tick();
    expect(location.path()).toBe('/edit/42');
  }))
});

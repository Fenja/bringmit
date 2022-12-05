import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {By} from "@angular/platform-browser";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has impressum', () => {
    const impressum = fixture.debugElement.query(By.css('app-impressum'));
    expect(impressum).toBeTruthy();
  });

  it('has privacy policy', () => {
    const privacyPolicy = fixture.debugElement.query(By.css('app-privacy-policy'));
    expect(privacyPolicy).toBeTruthy();
  });
});

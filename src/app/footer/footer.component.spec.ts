import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
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

  it('has impressum link', () => {
    let href = fixture.debugElement.nativeElement.querySelector('#impressum')
      .getAttribute('href');
    expect(href).toEqual('/impressum');
  });

  it('has privacy policy link', () => {
    let href = fixture.debugElement.nativeElement.querySelector('#privacypolicy')
      .getAttribute('href');
    expect(href).toEqual('/datenschutz');
  });
});

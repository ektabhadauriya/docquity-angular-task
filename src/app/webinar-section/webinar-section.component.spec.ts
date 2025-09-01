import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarSectionComponent } from './webinar-section.component';

describe('WebinarSectionComponent', () => {
  let component: WebinarSectionComponent;
  let fixture: ComponentFixture<WebinarSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarSectionComponent]
    });
    fixture = TestBed.createComponent(WebinarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

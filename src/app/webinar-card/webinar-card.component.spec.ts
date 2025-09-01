import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarpostComponent } from './webinar-post.component';

describe('WebinarpostComponent', () => {
  let component: WebinarpostComponent;
  let fixture: ComponentFixture<WebinarpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarpostComponent]
    });
    fixture = TestBed.createComponent(WebinarpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

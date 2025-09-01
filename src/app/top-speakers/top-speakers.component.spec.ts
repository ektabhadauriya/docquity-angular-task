import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpeakersComponent } from './top-speakers.component';

describe('TopSpeakersComponent', () => {
  let component: TopSpeakersComponent;
  let fixture: ComponentFixture<TopSpeakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSpeakersComponent]
    });
    fixture = TestBed.createComponent(TopSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

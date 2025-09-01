import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByTopicsComponent } from './browse-by-topics.component';

describe('BrowseByTopicsComponent', () => {
  let component: BrowseByTopicsComponent;
  let fixture: ComponentFixture<BrowseByTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseByTopicsComponent]
    });
    fixture = TestBed.createComponent(BrowseByTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

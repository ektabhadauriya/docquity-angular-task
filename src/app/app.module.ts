import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WebinarSectionComponent } from './webinar-section/webinar-section.component';
import { HomeComponent } from './home/home.component';
import { WebinarCardComponent } from './webinar-card/webinar-card.component';
import { ResumeWatchingComponent } from './resume-watching/resume-watching.component';
import { TopSpeakersComponent } from './top-speakers/top-speakers.component';
import { BrowseByTopicsComponent } from './browse-by-topics/browse-by-topics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebinarSectionComponent,
    HomeComponent,
    WebinarCardComponent,
    ResumeWatchingComponent,
    TopSpeakersComponent,
    BrowseByTopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

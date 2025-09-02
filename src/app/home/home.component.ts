import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Webinar } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  liveWebinarData:Array<Webinar> = [];
  upcomingWebinarData:Array<Webinar> = [];
  cardiologyWebinar:Array<Webinar> = [];
  constructor(private readonly homeService:HomeService){
    this.liveWebinarData = this.homeService.getLiveWebinarData();
    this.upcomingWebinarData = this.homeService.getUpcomingWebinarData();
    this.cardiologyWebinar = this.homeService.getCardiologyWebinarData();
  }
}

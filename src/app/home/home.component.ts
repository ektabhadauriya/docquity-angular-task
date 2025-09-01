import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  liveWebinarData:Array<any> = [];
  upcomingWebinarData:Array<any> = [];

  constructor(private readonly homeService:HomeService){
    this.liveWebinarData = this.homeService.getLiveWebinarData();
    this.upcomingWebinarData = this.homeService.getUpcomingWebinarData();
  }
}

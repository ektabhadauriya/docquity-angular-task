import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Speaker } from '../home/home.model';

@Component({
  selector: 'app-top-speakers',
  templateUrl: './top-speakers.component.html',
  styleUrls: ['./top-speakers.component.scss']
})
export class TopSpeakersComponent {
  topSpeakers:Array<Speaker>=[];
  constructor(private readonly homeService:HomeService) {
    this.topSpeakers = this.homeService.getTopSpeakersData();
  }

}

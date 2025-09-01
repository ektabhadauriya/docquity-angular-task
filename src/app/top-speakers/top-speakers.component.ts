import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-top-speakers',
  templateUrl: './top-speakers.component.html',
  styleUrls: ['./top-speakers.component.scss']
})
export class TopSpeakersComponent {
  topSpeakers:Array<any>=[];
  constructor(private readonly homeService:HomeService) {
    this.topSpeakers = this.homeService.getTopSpeakersData();
  }

}

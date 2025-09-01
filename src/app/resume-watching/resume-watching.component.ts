import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-resume-watching',
  templateUrl: './resume-watching.component.html',
  styleUrls: ['./resume-watching.component.scss']
})
export class ResumeWatchingComponent {
  videoData:Array<any> = [];
  constructor(private readonly homeService:HomeService) {
    this.videoData = this.homeService.getPrevViewedVideos();
  }

}

import { Component } from '@angular/core';
import { Topic, Webinar } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-browse-by-topics',
  templateUrl: './browse-by-topics.component.html',
  styleUrls: ['./browse-by-topics.component.scss']
})
export class BrowseByTopicsComponent {
  topicList:Array<Topic> = [];
  specialityList:Array<string> = [];
  webinarData:Array<Webinar> = [];
  constructor(private readonly homeService:HomeService) {
    this.topicList = this.homeService.getTopicList();
    this.specialityList =this.homeService.getSpecialityList();
    this.webinarData = this.homeService.getWebinarByTopic();
  }

}

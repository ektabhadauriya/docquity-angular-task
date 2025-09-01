import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-webinar-section',
  templateUrl: './webinar-section.component.html',
  styleUrls: ['./webinar-section.component.scss']
})
export class WebinarSectionComponent {
  @Input() type:string ='';
  @Input() webinarData: Array<any> = [];
}

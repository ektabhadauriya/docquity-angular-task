import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-webinar-card',
  templateUrl: './webinar-card.component.html',
  styleUrls: ['./webinar-card.component.scss']
})
export class WebinarCardComponent {
  @Input() postData:any;
  @Input() page: string='';

}

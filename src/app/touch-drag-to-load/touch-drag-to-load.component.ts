import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { LoadNotificationService } from '../load-notification.service';


@Component({
  selector: 'app-touch-drag-to-load',
  templateUrl: './touch-drag-to-load.component.html',
  styleUrls: ['./touch-drag-to-load.component.css']
})
export class TouchDragToLoadComponent implements OnInit {

  

  position$ = Observable.of(0);
  positionTranslate3d$ = this.position$
    .map(p=> `translate3d(0, ${p - 70}px, 0)`)    
  rotateTransform$ = Observable.of(`rotate(0deg)`);

  constructor(private loadNotificationSvc: LoadNotificationService) { }

  ngOnInit() {
  }

}

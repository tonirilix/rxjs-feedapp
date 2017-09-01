import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import { LoadNotificationService } from '../load-notification.service';


@Component({
  selector: 'app-touch-drag-to-load',
  templateUrl: './touch-drag-to-load.component.html',
  styleUrls: ['./touch-drag-to-load.component.css']
})
export class TouchDragToLoadComponent implements OnInit {

  touchstart$ = Observable.fromEvent<TouchEvent>(document, 'touchstart');
  touchend$ = Observable.fromEvent<TouchEvent>(document, 'touchend');
  touchmove$ = Observable.fromEvent<TouchEvent>(document, 'touchmove');

  drag$ = this.touchstart$
    .switchMap((start)=> 
      this.touchmove$
        .map(move => move.touches[0].pageY - start.touches[0].pageY )
        .takeUntil(this.touchend$)
   );

  position$ = this.drag$.startWith(0)

  positionTranslate3d$ = this.position$
    .map(p=> `translate3d(0, ${p - 70}px, 0)`)    
  rotateTransform$ = Observable.of(`rotate(0deg)`);

  constructor(private loadNotificationSvc: LoadNotificationService) { }

  ngOnInit() {
  }

}

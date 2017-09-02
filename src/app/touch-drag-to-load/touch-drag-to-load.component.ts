import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/fromEvent';
import { LoadNotificationService } from '../load-notification.service';


@Component({
  selector: 'app-touch-drag-to-load',
  templateUrl: './touch-drag-to-load.component.html',
  styleUrls: ['./touch-drag-to-load.component.css']
})
export class TouchDragToLoadComponent implements OnInit {

  currentPos;

  // completeAnimations$ = this.loadNotificationSvc.loadComplete$
  //   .withLatestFrom(Observable.defer<number>(() => this.position$) )  
  //   .switchMap(([_, currentPosition])=> 
  //     this.tweenObservable(currentPosition, 0, 200)
  //   );

  /**
   * 
   */
  completeAnimation$ = this.loadNotificationSvc.loadComplete$
    .map(() => this.currentPos)
    .switchMap(currentPos => this.tweenObservable(currentPos, 0 , 200))

  touchstart$ = Observable.fromEvent<TouchEvent>(document, 'touchstart');
  touchend$ = Observable.fromEvent<TouchEvent>(document, 'touchend');
  touchmove$ = Observable.fromEvent<TouchEvent>(document, 'touchmove');

  drag$ = this.touchstart$
    .switchMap((start)=> {
      let pos = 0;
      return this.touchmove$
      .map(move => move.touches[0].pageY - start.touches[0].pageY )
      .do(p => pos = p ) // Here we update de last value emited to use it after the touchend
      .takeUntil(this.touchend$)
      .concat( 
        // Here we create a stream of numbers in desc mode to animate the object all the way up.
        // We need a small delay (defer) to wait for pos to be updated
        Observable.defer(()=> 
          this.tweenObservable(pos, 0, 200)
        )
      )
    })
    .do((p)=>{
      // Here we'll be checking if we're in the middle of the screen 
      // so we can make a request some data
      if(p >= window.innerHeight / 2){
        console.log('inner', window.innerHeight);
        this.loadNotificationSvc.requestLoad$.next();        
      }
    })
    .takeWhile((p)=> p < window.innerHeight / 2 ) // We're done with the observable when we reach the middle of the screen
    .repeat(); // After we kill the observable we need to repeat the process to keep listening after

  position$ = this.drag$
    .merge(this.completeAnimation$)
    .startWith(0)
    .do(pos => this.currentPos = pos)

  positionTranslate3d$ = this.position$
    .map(p=> `translate3d(0, ${p - 70}px, 0)`)    
  rotateTransform$ = Observable.of(`rotate(0deg)`);

  constructor(private loadNotificationSvc: LoadNotificationService) { }

  private tweenObservable(start, end, time) {
    const emissions = time / 10
    const step = (start - end) / emissions
    let c = 0;
    return Observable.timer(0, 10)
    .map(x => start - step * (x + 1))        
    .take(emissions)
  }

  ngOnInit() {
  }

}

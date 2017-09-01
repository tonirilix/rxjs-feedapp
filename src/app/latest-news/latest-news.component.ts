import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/timer';
import { NewsFeedService } from '../news-feed.service';
import { LoadNotificationService } from '../load-notification.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  updateNewsTrigger$ = Observable.timer(0, 50000)
    .merge(this.loadNotificationSvc.requestLoad$);

  news$ = this.updateNewsTrigger$.switchMap(() => this.newsFeedSvc.getNews())
    .do(this.loadNotificationSvc.loadComplete$)

  constructor(private newsFeedSvc: NewsFeedService, private loadNotificationSvc: LoadNotificationService) { }

  ngOnInit() { }

}

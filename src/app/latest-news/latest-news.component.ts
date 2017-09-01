import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { NewsFeedServiceService } from '../news-feed-service.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  updateNewsTrigger$ = Observable.timer(0, 10000);
  news$ = this.updateNewsTrigger$.switchMap(() => this.newsFeedSvc.getNews())

  constructor(private newsFeedSvc: NewsFeedServiceService) { }

  ngOnInit() { }

}

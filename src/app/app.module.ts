import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { TouchDragToLoadComponent } from './touch-drag-to-load/touch-drag-to-load.component';
import { NewsFeedService } from './news-feed.service';
import { LoadNotificationService } from './load-notification.service';

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent,
    TouchDragToLoadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NewsFeedService, LoadNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

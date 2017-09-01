import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsFeedServiceService } from './news-feed-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NewsFeedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

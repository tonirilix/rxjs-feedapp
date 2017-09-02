import { TestBed, inject } from '@angular/core/testing';

import { NewsFeedService } from './news-feed.service';

describe('NewsFeedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsFeedService]
    });
  });

  it('should be created', inject([NewsFeedService], (service: NewsFeedService) => {
    expect(service).toBeTruthy();
  }));
});

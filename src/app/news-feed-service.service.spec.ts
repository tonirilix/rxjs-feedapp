import { TestBed, inject } from '@angular/core/testing';

import { NewsFeedServiceService } from './news-feed-service.service';

describe('NewsFeedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsFeedServiceService]
    });
  });

  it('should be created', inject([NewsFeedServiceService], (service: NewsFeedServiceService) => {
    expect(service).toBeTruthy();
  }));
});

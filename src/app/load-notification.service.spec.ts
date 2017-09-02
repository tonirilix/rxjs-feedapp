import { TestBed, inject } from '@angular/core/testing';

import { LoadNotificationService } from './load-notification.service';

describe('LoadNotificationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadNotificationService]
    });
  });

  it('should be created', inject([LoadNotificationService], (service: LoadNotificationService) => {
    expect(service).toBeTruthy();
  }));
});

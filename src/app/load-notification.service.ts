import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class LoadNotificationService {
  requestLoad$ = new Subject<any>();
  loadComplete$ = new Subject<any>();

  constructor() { }

}

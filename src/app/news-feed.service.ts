import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import {INews} from './inews'

const api = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

@Injectable()
export class NewsFeedService {

  constructor(private http: Http) { }

  getNews(): Observable<INews[]>{
    return this.http.get(api)
      .map(res => res.json())
      .catch((err)=>{
        console.warn('Error');
        return Observable.empty()
      })
  }

}

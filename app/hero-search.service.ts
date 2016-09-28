/**
 * Created by Administrator on 2016/9/28.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Hero} from "./app.hero";
import {Observable} from "rxjs/observable";


@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {
  }

  search(key: string): Observable<Hero[]> {


    return this.http.get(`app/heroes/?name=${key}`)
      .map((r: Response)=>r.json().data as Hero[])
  }


}

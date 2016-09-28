/**
 * Created by Administrator on 2016/9/27.
 */
import {Injectable} from '@angular/core';

import {Hero} from "./app.hero";
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
  private url = 'app/heroes';

  private header=new Headers({'content-type':'application/json'})

  constructor(private http: Http) {
  };

  getHeroes(): Promise<Hero[]> {

    return this.http.get(this.url).toPromise().then(responce => responce.json().data as Hero[]).catch(this.handleError)

  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);

  }

  update(hero: Hero):Promise<Hero> {
    const url=`${this.url}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers: this.header})
      .toPromise().then(()=>hero).catch(this.handleError)
  }

  create(name: string):Promise<Hero> {
    return this.http.post(this.url,JSON.stringify({name:name}),{headers:this.header})
      .toPromise().then(res=>res.json().data).catch(this.handleError);

  }

  delete(id: number): Promise<void> {
    let url = `${this.url}/${id}`;
    return this.http.delete(url, {headers: this.header})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}


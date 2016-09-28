/**
 * Created by Administrator on 2016/9/27.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from './app.hero';
import {HeroService} from './hero.service';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls:['dashboard.component.css']
})
export class DashBoardComponent implements OnInit {

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));

  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router,) {
  }


  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

/**
 * Created by Administrator on 2016/9/27.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './app.hero';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common'

@Component({
  moduleId:module.id,
  selector: 'hero-detail',
  templateUrl:'hero-detail.component.html',
  styleUrls:['heroes-detail.component.css']


})
export class HeroDetailComponent implements OnInit {


  ngOnInit(): void {
    this.router.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  @Input()
  hero: Hero

  constructor(private heroService: HeroService,private location: Location,private router: ActivatedRoute) {
  }

  goBack(): void {
    this.location.back();
  }

  save():void
  {
    this.heroService.update(this.hero).then(()=>this.goBack())

  }


}

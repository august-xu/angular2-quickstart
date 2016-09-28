/**
 * Created by Administrator on 2016/9/27.
 */
import {Component} from '@angular/core';
import {HeroService} from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  providers: [HeroService],
  styleUrls:['app.component.css']
})
export class AppComponent {

  title: 'Tour of Heroes'

}

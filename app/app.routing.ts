import {Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {ModuleWithProviders} from "@angular/core";
import {DashBoardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
/**
 * Created by Administrator on 2016/9/27.
 */

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: '',
    redirectTo:'/dashboard',
    pathMatch:'full'

  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

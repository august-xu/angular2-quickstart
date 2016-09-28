import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HeroesComponent}  from './heroes.component';

import {FormsModule} from '@angular/forms';

import {HeroDetailComponent} from './hero-detail.component'

import {AppComponent} from './app.component'
import {routing} from "./app.routing";
import {DashBoardComponent} from "./dashboard.component";

import {HttpModule} from '@angular/http'

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'
import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashBoardComponent,HeroSearchComponent],
  bootstrap: [AppComponent],

})
export class AppModule {
}

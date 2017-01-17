import { NgModule, ErrorHandler } from '@angular/core';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyTeamsPage } from '../pages/pages';
import { TeamsDetailsPage,TeamHomePage,StandingsPage } from '../pages/pages';
import { TournamentsPage, TeamsPage } from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamsDetailsPage,
    TeamHomePage,
    StandingsPage,
    // Page1,
    // Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamsDetailsPage,
    TeamHomePage,
    StandingsPage,
    // Page1,
    // Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

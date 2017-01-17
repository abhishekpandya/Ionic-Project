import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private elietApi : EliteApi) {}

  ionViewDidLoad() {
      let selectedtourney = this.navParams.data;

      this.elietApi.getTournamentData(selectedtourney.id).subscribe(data=>{
        this.teams = data.teams;
      });
  }
  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }
}

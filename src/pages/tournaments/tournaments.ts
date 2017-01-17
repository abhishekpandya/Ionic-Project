import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    this.eliteApi.getTournaments().then(data => this.tournaments = data)
  }

  itemTapped($event,tourney){
    this.navCtrl.push(TeamsPage,tourney);
  }

}

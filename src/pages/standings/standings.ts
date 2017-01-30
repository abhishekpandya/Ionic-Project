import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EliteApi } from '../../shared/shared';
import * as _ from 'lodash';

/*
  Generated class for the Standings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage {
  standings: any[];
  team: any;
  allStandings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private eliteApi: EliteApi) { 
      let tourneyData = this.eliteApi.getCurrentTourney();
      this.standings = tourneyData.standings;

    this.allStandings =
      _.chain(this.standings)
        .groupBy('division')
        .toPairs()
        .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
        .value();
    }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    // let tourneyData = this.eliteApi.getCurrentTourney();
    // this.standings = tourneyData.standings;

    // this.allStandings =
    //   _.chain(this.standings)
    //     .groupBy('division')
    //     .toPairs()
    //     .map(item => _.zipObject(['divisionName', 'divisionStandings', item]))
    //     .value();
  }
}

import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';
import * as _ from 'lodash';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  private allTeams:any;
  private allTeamDivisions: any;
  teams = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private elietApi : EliteApi,
    private loadingController : LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content:'Getting teams...',
      spinner:'dots'
    });

    loader.present().then(()=>{
      let selectedtourney = this.navParams.data;

      this.elietApi.getTournamentData(selectedtourney.id).subscribe(data=>{
        this.allTeams = data.teams;
        
        this.allTeamDivisions =
          _.chain(data.teams)
          .groupBy('division')
          .toPairs()
          .map(item => _.zipObject(['divisionName','divisionTeams'],item))
          .value();
        
        this.teams = this.allTeamDivisions;
        loader.dismiss();
      });
    })
      // let selectedtourney = this.navParams.data;

      // this.elietApi.getTournamentData(selectedtourney.id).subscribe(data=>{
      //   this.teams = data.teams;
      // });
  }
  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }
}

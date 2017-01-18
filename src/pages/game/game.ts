import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import { TeamHomePage } from '../pages';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) { 
     this.game = this.navParams.data;
  }

  ionViewDidLoad() {
    //this.game = this.navParams.data;
  }

  teamTapped($event,teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

}

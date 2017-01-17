import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private eliteApi: EliteApi,
    private loadingController : LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content : 'Getting content...',
      spinner: 'dots'
    });

    loader.present().then(()=>{
      this.eliteApi.getTournaments().then(data => {
          this.tournaments = data;
          loader.dismiss();
      });
    });
    
  }

  itemTapped($event,tourney){
    this.navCtrl.push(TeamsPage,tourney);
  }

}

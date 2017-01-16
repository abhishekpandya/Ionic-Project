import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TeamsDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams-details',
  templateUrl: 'team-details.html'
})
export class TeamsDetailsPage {

  team: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**navparam:' , this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsDetailsPage');
  }

}

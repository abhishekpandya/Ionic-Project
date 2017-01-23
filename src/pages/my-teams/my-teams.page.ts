import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage, TournamentsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
    templateUrl: 'my-teams.page.html'
})

export class MyTeamsPage {
    favorites = [
        {
            team: { id: 6182, name: 'HC Elite 7th', coach: 'Steve Michelotti' },
            tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
            tournamentName: 'March Madness Tournament'
        },
        {
            team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
            tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
            tournamentName: 'Holiday Hoops Challenge'
        }
    ];
    constructor(private nav: NavController,
        private navParams: NavParams,
        private loadingController: LoadingController,
        private eliteApi: EliteApi) { }

    goToTournaments() {
        this.nav.push(TournamentsPage);
    }
    favoriteTapped($event, favorite) {
        let loader = this.loadingController.create({
            content: 'Getting data...',
            spinner: 'dots'
            //dismissOnPageChange: true
        });
        loader.present().then(() => {
            this.eliteApi.getTournamentData(favorite.tournamentId)
                .subscribe(t => this.nav.push(TeamHomePage, favorite.team));
                loader.dismiss();
        }
        )
    }
}
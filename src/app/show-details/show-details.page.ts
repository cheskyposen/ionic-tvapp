import { Component } from '@angular/core';
import {Show} from '../models/show';
import {TvmazeService} from '../models/tvmaze.service';
import {ActivatedRoute} from '@angular/router';
import {Episode} from '../models/episode';
import { ModalController } from '@ionic/angular';
import {SeasonDetailsComponent} from './season-details/season-details.component';

@Component({
    selector: 'app-show-details',
    templateUrl: './show-details.page.html',
    styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage {
    show: Show;
    sid: string;

    constructor(public tvmaze: TvmazeService, public route: ActivatedRoute, public modalController: ModalController) {
        this.route.paramMap
            .subscribe(pm => {
                this.sid = pm.get('sid');
                this.fetchShow();
            });
    }

    fetchShow(): void {
        this.tvmaze.fetchShow(this.sid)
            .subscribe(resultingShow => {
                    this.show = resultingShow;
                    this.loadFirstAndLastEpisodes();
                    this.tvmaze.fetchEpisodes(this.show.id)
                        .subscribe(
                            (episodes: Episode[]) => {
                                this.show.addEpisodes(episodes);
                            });
                }
            );
    }

    loadFirstAndLastEpisodes(): void {
        if (this.show.lastEpLink) {
            this.tvmaze.fetchEpisodeByURL(this.show.lastEpLink).subscribe(ep => this.show.lastEp = ep);
        }

        if (this.show.nextEpLink) {
            this.tvmaze.fetchEpisodeByURL(this.show.nextEpLink).subscribe(ep => this.show.nextEp = ep);
        }
    }

    async loadSeason(season: number) {
        const modal = await this.modalController.create({
            component: SeasonDetailsComponent,
            componentProps: {
                episodeList: this.show.episodes[season],
                showName: this.show.name
            }
        });
        return await modal.present();
    }
}

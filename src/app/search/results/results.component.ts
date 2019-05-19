import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../../models/show';
import {TvmazeService} from '../../models/tvmaze.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() term: string;
  shows: Show[];
  constructor(public tvmaze: TvmazeService, public modalController: ModalController) { }

  ngOnInit() {
    this.tvmaze.fetchShows(this.term)
        .subscribe(res => this.shows = res);
  }

  async close() {
    await this.modalController.dismiss();
  }
}

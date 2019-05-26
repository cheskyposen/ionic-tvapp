import {Component, Input, OnInit} from '@angular/core';
import {Episode} from '../../models/episode';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss'],
})
export class SeasonDetailsComponent implements OnInit {
  @Input() episodeList: Episode[];
  @Input() showName: string;
  constructor(public modalCtr: ModalController) { }

  ngOnInit() {}

  async onClose() {
    await this.modalCtr.dismiss();
  }
}

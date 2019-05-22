import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Show} from '../../models/show';
import {TvmazeService} from '../../models/tvmaze.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Episode} from '../../models/episode';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage implements OnInit, OnDestroy {
  show: Show;
  sid: Observable<string>;
  unsubscribe: EventEmitter<any> = new EventEmitter();
  constructor(
      private tvmazeService: TvmazeService,
      private route: ActivatedRoute
  ) {
    this.route.paramMap.pipe(takeUntil(this.unsubscribe))
        .subscribe((param) => this.sid = of(param.get('sid')));
  }

  ngOnInit() {
    this.sid.pipe(takeUntil(this.unsubscribe))
        .subscribe((sid) => this.fetchShow(sid));
  }

  private fetchShow(sid: string): void {
    this.tvmazeService.fetchShow(sid).pipe(takeUntil(this.unsubscribe))
        .subscribe((show: Show) => {
          this.show = show;
          this.tvmazeService.fetchEpisodes(this.show.id).pipe(takeUntil(this.unsubscribe))
              .subscribe((episodes: Episode[]) => {
                this.show.addEpisodes(episodes);
              });
        });
  }

  ngOnDestroy(): void {
    this.unsubscribe.emit();
  }
}

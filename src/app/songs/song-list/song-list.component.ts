import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongStateFacade } from '../+state/song-state.facade';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent {
  constructor(public facade: SongStateFacade) {}
}

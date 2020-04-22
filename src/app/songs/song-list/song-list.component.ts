import { Component } from '@angular/core';
import { SongsStateFacade } from '../+state/songs-state.facade';

@Component({
  selector: 'app-song-list',
  template: `
    <div class="container" style="padding: 20px;">
        <div class="card">
          <div class="card-header">
            Songs:
            <div style="float: right;">
                <input placeholder="search" (input)="facade.onSearch($event.currentTarget.value)" [value]="facade.searchFilter$ | async" />
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <td>Title</td>
                <td>Artist</td>
                <td>Length</td>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let song of facade.songsList$ | async" [routerLink]="['/', 'songs', 'info', song.songId]">
                <td>{{ song.title }}</td>
                <td>{{ song.artist }}</td>
                <td>{{ song.length }}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  `,
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent {

  constructor(public facade: SongsStateFacade) {}

}

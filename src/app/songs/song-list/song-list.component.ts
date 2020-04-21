import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SetSearchString } from '../+state/songs-state.actions';
import { querySongList, querySongSearchString } from '../+state/songs-state.selectors';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent {
  songsList$ = this.store.pipe(select(querySongList));
  searchFilter$ = this.store.pipe(select(querySongSearchString));

  constructor(private store: Store) {}

  onSearch(search: string) {
    this.store.dispatch(SetSearchString({ searchString: search }));
  }
}

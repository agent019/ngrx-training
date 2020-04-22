import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { queryFilteredSongs, querySongSearchString } from './song-state.selector';
import { SetSearchString } from './songs-state.actions';

// This is the public api basically
@Injectable()
export class SongStateFacade {
    songs$ = this.store.pipe(select(queryFilteredSongs));
    searchFilter$ = this.store.pipe(select(querySongSearchString));

    constructor(private store: Store) { }

    onSearch(searchString: string) {
      this.store.dispatch(SetSearchString({ searchString }));
    }
}
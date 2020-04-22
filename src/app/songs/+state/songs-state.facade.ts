import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { querySongList, querySongSearchString } from './songs-state.selectors';
import { SetSearchString } from './songs-state.actions';

@Injectable()
export class SongsStateFacade {

  songsList$ = this.store.pipe(select(querySongList));
  searchFilter$ = this.store.pipe(select(querySongSearchString));

  constructor(private store: Store) { }

  onSearch(search: string) {
    this.store.dispatch(SetSearchString({ searchString: search }));
  }
}

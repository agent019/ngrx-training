import { SongsStateKey, ISongsState } from './songs-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const querySongsState = createFeatureSelector<ISongsState>(SongsStateKey);

export const querySongs = createSelector(querySongsState, state => state.songs);

export const querySongSearchString = createSelector(querySongsState, state => state.searchString);

export const queryFilteredSongs = createSelector(querySongs, querySongSearchString, (songs, searchString) => {
    if (!searchString) {
    return songs;
    }

    const filteredSongList = songs
    .filter((x) => {
        return x.title.toLowerCase()
        .indexOf(searchString.toLowerCase()) > -1;
    });
    
    return filteredSongList;
});

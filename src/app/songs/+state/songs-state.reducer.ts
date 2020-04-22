import { createReducer, on } from '@ngrx/store';
import { InitialSongState } from './songs-state.model';

import * as actions from './songs-state.actions';

export const SongStateReducer = createReducer(InitialSongState, 
  on(actions.SetSongs, (oldState, action) => {
    const newState = { ...oldState };
    newState.songs = action.songs;
    return newState;
  })
);

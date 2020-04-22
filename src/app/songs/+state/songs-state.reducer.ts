import { createReducer } from '@ngrx/store';
import { InitialSongState } from './songs-state.model';

export const SongStateReducer = createReducer(InitialSongState);
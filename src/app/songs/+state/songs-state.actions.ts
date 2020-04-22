import { createAction, props } from '@ngrx/store';
import { ISong } from '../api/song.model';

// needs to be unique
// user string '[feature name] Action'
export const SetSongs = createAction('[songs] SetSongs', props<{ songs: ISong[] }>());

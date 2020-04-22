import { ISong } from '../api/song.model';

export const SongsStateKey = 'songs';

export interface ISongsState {
  songs: ISong[];
}

export const InitialSongState: ISongsState = {
  songs: []
};

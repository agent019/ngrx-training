import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISong } from './song.model';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as actions from '../+state/songs-state.actions';

@Injectable()
export class SongsApiService {
  constructor(private httpClient: HttpClient) {}

  getSongs(): Observable<Action> {
    return this.httpClient
      .get<ISong[]>('/assets/data/songs.json')
      .pipe(map(songs => actions.SetSongs({ songs })));
  }
}

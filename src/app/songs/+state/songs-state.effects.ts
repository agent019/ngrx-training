import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { switchMap, filter, map } from 'rxjs/operators';

import * as actions from './songs-state.actions';
import { SongsApiService } from '../api/songs-api.service';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class SongsStateEffects {

  getSongs = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.GetSongs),
      switchMap(action => this.songsApi.getSongs())
    ));

  songListRouted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((action: RouterNavigationAction) => action.payload.routerState.url === '/songs/list'),
      map(action => actions.GetSongs())
    )
  );

  constructor(private actions$: Actions, private songsApi: SongsApiService) { }
}

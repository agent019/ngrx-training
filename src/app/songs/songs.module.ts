import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { SongsApiService } from './api/songs-api.service';
import { StoreModule } from '@ngrx/store';
import { SongsStateKey } from './+state/songs-state.model';
import { SongStateReducer } from './+state/songs-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SongsStateEffects } from './+state/song-state.effects';
import { SongStateFacade } from './+state/song-state.facade';

@NgModule({
  declarations: [SongListComponent, SongInfoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(SongsStateKey, SongStateReducer),
    EffectsModule.forFeature([SongsStateEffects]),
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: SongListComponent,
      },
      {
        path: 'info/:songId',
        component: SongInfoComponent
      }
    ]),
  ],
  providers: [
    SongsApiService,
    SongStateFacade
  ]
})
export class SongsModule {}

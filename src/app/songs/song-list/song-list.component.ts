import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongsApiService } from '../api/songs-api.service';
import { ISong } from '../api/song.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit, OnDestroy {
  songListSnapshot: ISong[] = [];
  filteredSongList: ISong[] = [];
  songSubscription: Subscription;

  constructor(private songsApi: SongsApiService) {}

  ngOnInit(): void {
    this.songSubscription = this.songsApi
      .getSongs()
      .subscribe(
        (songs) => {
          this.songListSnapshot = songs;
          this.filteredSongList = songs;
        });
  }

  ngOnDestroy(): void {
    this.songSubscription.unsubscribe();
  }

  onSearch(search: string) {
    if (!search) {
      this.filteredSongList = this.songListSnapshot;
      return;
    }

    this.filteredSongList = this.songListSnapshot
      .filter((x) => {
        return x.title.toLowerCase()
          .indexOf(search.toLowerCase()) > -1;
      });
  }
}

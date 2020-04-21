import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISong } from './song.model';

@Injectable()
export class SongsApiService {
  constructor(private httpClient: HttpClient) {}

  getSongs(): Observable<ISong[]> {
    return this.httpClient.get<ISong[]>('/assets/data/songs.json');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Album from '../models/albumModel.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiURL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.apiURL}/albums`);
  }
  getAlbum(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.apiURL}/albums/${id}`);
  }
  createAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(`${this.apiURL}/albums`,album);
  }
  updateAlbum(album:Album): Observable<Album> {
    return this.httpClient.put<Album>(`${this.apiURL}/albums/${album.id}`,album);
  }
  deleteAlbum(id: number): Observable<Album> {
    return this.httpClient.delete<Album>(`${this.apiURL}/albums/${id}`);
  }
}

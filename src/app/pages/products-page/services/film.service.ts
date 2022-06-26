import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Film from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiURL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.apiURL}/films`);
  }
  
  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.apiURL}/films/${id}`);
  }

  createFilms(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(`${this.apiURL}/films`, film);
  }

  updateFilms(film: Film): Observable<Film> {
    return this.httpClient.put<Film>(`${this.apiURL}/films/${film.id}`, film);
  }

  deleteFilm(id: number): Observable<Film> {
    return this.httpClient.delete<Film>(`${this.apiURL}/films/${id}`);
  }
}

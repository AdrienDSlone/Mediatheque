import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Film from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  // attribut ou se trouve les datas
  private apiURL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  // creation des fonctions pour faire un CRUD via requêt http
  // Observable permet de rappeler la fonction à chaque modification de la BDD
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

  // L'observable permet de checker si la donnée que l'on envisage d'effacer est la bonne
  deleteFilm(id: number): Observable<Film> {
    return this.httpClient.delete<Film>(`${this.apiURL}/films/${id}`);
  }
}

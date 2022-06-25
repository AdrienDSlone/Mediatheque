import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmHttpService {

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get("http://localhost:5000/films")
  }
}

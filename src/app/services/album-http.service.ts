import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumHttpService {

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get("http://localhost:5000/albums")
  }

  public save(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(apiUrl,utilisateur);
  }

  public delete(id:number) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
}

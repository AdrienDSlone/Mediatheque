import { Component } from '@angular/core';
import { FilmHttpService } from './services/film-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  films: any = []
  constructor(private service:FilmHttpService){
    this.service.findAll().subscribe((data)=> this.films = data);
  }
}

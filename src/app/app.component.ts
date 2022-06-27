import { Component } from '@angular/core';
import { FilmService } from './pages/products-page/services/film.service';
import { AlbumService } from './pages/products-page/services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  films: any = [];
  albums: any = [];
  constructor(private service:FilmService,private album:AlbumService){
    // this.service.findAll().subscribe((data)=> {this.films = data;});
  }
}
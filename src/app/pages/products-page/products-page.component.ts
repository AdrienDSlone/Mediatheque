import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router,RouterPreloader } from '@angular/router';
import { Observable } from 'rxjs';

// sert à fabriquer des objets
import Film from 'src/app/pages/products-page/models/film.model';
import Album from 'src/app/pages/products-page/models/album.model';
import { FilmService } from 'src/app/pages/products-page/services/film.service';
import { AlbumService } from 'src/app/pages/products-page/services/album.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  // sert à fabriquer des objets
  films: Film[] = [];
  albums: Album[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private albumService: AlbumService
    ) {}

  // déclencher des fonctionnalités à la construction des composants
  ngOnInit(): void {
    // const type = this.route.snapshot.paramMap.get('type');
    // const id = this.route.snapshot.paramMap.get('id');
    // this.setSubscribe(type,id);
    this.filmService.getFilms().subscribe((films)=> {
      this.films = films;
    });
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  // private subscribeFilm(id:number): void {
  //   this.filmService.getFilm(id).subscribe((film)=> {
  //     this.films=film;
  //   });
  // }

  // private subscribeAlbum(id:number): void {
  //   this.albumService.getAlbum(id).subscribe((album)=>{
  //     this.albums = album;
  //   });
  // }

  // private setSubscribe(type:string | null, id:string | null): void {
  //   if (id && type === 'albums') {
  //     this.subscribeAlbum(+id);
  //   } else if (id && type === 'films') {
  //     this.subscribeFilm(+id);
  //   } else if (!id || !type) {
  //     this.router.navigate(['/not-found']);
  //   }
  // }
}

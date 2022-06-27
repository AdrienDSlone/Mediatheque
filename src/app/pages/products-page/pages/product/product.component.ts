import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Album from '../../models/album.model';
import Film from '../../models/film.model';
import { AlbumService } from '../../services/album.service';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 // un attribut optionel qui est de type soit film soit  album

 product !: Film | Album;  // le pipe, fonctionne un peu comme un Ou avec le !, on l'informe qu'elle sera initialisé plus tard

 constructor(
   private router: Router,
   private route: ActivatedRoute,
   private filmService: FilmService,
   private albumService: AlbumService
 ) { }

 private subscribeAlbum(id: number): void {
   this.albumService.getAlbum(id).subscribe((album) => { this.product = album })
 }

 private subscribeFilm(id: number): void {
   this.filmService.getFilm(id).subscribe((film) => { this.product = film })
 }

 private setSubscribe(typeObj: string | null, id: string | null) {   // un id sur un URL est en string
   if (id && typeObj === "albums") {  // si tu as un id et tu est de type albums alors...
     this.subscribeAlbum(+id);
   } else if (id && typeObj === "films") {
     this.subscribeFilm(+id);
   } else if (!id || !typeObj) {
     this.router.navigate(["/not-found"])
   }
 }

 ngOnInit(): void {
   //recuperation de l'id sur lesquel je click, donc dans URL
   const id = this.route.snapshot.paramMap.get("id");
   //recuperation de l'type sur lesquel je click, donc dans URL
   const typeObj = this.route.snapshot.paramMap.get("typeObj");

   this.setSubscribe(typeObj, id);
 }

}

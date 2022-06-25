import { Component, OnInit } from '@angular/core';
import Film from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  datas: Film[] = [];
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

}

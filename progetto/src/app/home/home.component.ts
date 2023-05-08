import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private movieService: MovieService){ }

  lista?: Movie[]
  catalogo?: Movie[] = []

  page:number = 1

  posterSize: string = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"

  ngOnInit(){
    /*if(this.movieService.lista){
      this.catalogo = this.movieService.lista.results
    }
    else{*/
    this.movieService.getMovies(this.page).subscribe((response) => {
      this.lista = response.results;
      this.catalogo?.push(...response.results)
      })
    //}
  }

  onScrollDown(){
    console.log("scrolled "+ this.page)
    this.movieService.getMovies(++this.page).subscribe((response) => {
      this.lista = response.results;
      this.catalogo?.push(...response.results)
      })
    }


}
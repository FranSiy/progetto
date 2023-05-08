import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { GetMovies, Movie } from '../models/movie';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {

  constructor(
    private movieService: MovieService, 
    private ar: ActivatedRoute,
    private listService: ListService){ }

  movie?: Movie
  apiKey: string = "780dc1ce1e757bb20eb47e869ea83bfc"

  posterSize: string = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"

  teaser?: any
  teaserKey?: string
  youtube2: string = "http://www.youtube.com/embed/"

  catalogo?: GetMovies

  ngOnInit(){
    this.ar.params.subscribe((p:Params)=>{
      const idMovie = p["id"]
      this.movieService.getDetail(idMovie).subscribe({
        next: response => {
          this.movie = response
          //console.log(this.movie)
        }
      })
    })
    this.ar.params.subscribe((p:Params)=>{
      const idMovie = p["id"]
      this.movieService.getTeaser(idMovie).subscribe({
        next: response => {
          this.teaser = response
          //console.log(this.teaser)
          this.youtube2 += this.teaser.results[0].key
          //console.log(this.youtube2)
        }
      })
    })
    this.ar.params.subscribe((p:Params)=>{
      const idMovie = p["id"]
      this.movieService.getSimilar(idMovie).subscribe({
        next: response => {
          this.catalogo = response
          //console.log(this.catalogo)
        }
      })
    })
    

  }//on 

  add(movie: Movie){
      this.listService.add(movie)
  }


}//class


// https://api.themoviedb.org/3/movie/${id}/videos?api_key=780dc1ce1e757bb20eb47e869ea83bfc
  // https://www.youtube.com/watch?v=${results.key} 
import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMovies, Movie } from '../models/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private movieService: MovieService, private ar: ActivatedRoute, private router : Router){ }

  results?: GetMovies

  posterSize: string = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
  

  ngOnInit(){
    this.ar.queryParams.subscribe( p => {
      this.movieService.getSearched(p['k']).subscribe({
        next:
        res => {
          this.results = res
          console.log(this.results)
          if(this.results.results.length == 0){
            console.log("error")
            this.router.navigate(['not-found'])
          }
        }
      })
    })
  }

}

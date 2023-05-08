import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetMovies, Movie } from '../models/movie';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  response:any
  lista?: GetMovies

getMovies(page:number){
  return this.http.get<GetMovies>('https://api.themoviedb.org/3/movie/popular?api_key=780dc1ce1e757bb20eb47e869ea83bfc&language=en-US&page=',
  { params: {page: page} }).pipe(tap(r => this.lista = r))
}

getDetail(id: number){
  return this.http.get<Movie>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=780dc1ce1e757bb20eb47e869ea83bfc`,
    { params: {movie: id} })
  }

getTeaser(id: number){
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=780dc1ce1e757bb20eb47e869ea83bfc`,
  { params: {movie: id} } )
}

getSimilar(id: number){
  return this.http.get<GetMovies>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=780dc1ce1e757bb20eb47e869ea83bfc&language=en-US&page=1`,
  { params: {movie: id} } )
}

getSearched(key: string){
  return this.http.get<GetMovies>(`https://api.themoviedb.org/3/search/movie?api_key=780dc1ce1e757bb20eb47e869ea83bfc&query=${key}`, 
  { params: {keyword: key} } )
}



}

//TMDB apiKey = 780dc1ce1e757bb20eb47e869ea83bfc

//IMDB prima apiKey = k_j45lkvbl
//IMDB seconda apiKey = k_qvdbo84y

// https://api.themoviedb.org/3/search/movie?api_key=780dc1ce1e757bb20eb47e869ea83bfc&query=


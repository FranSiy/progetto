export interface GetMovies{
    results: Movie[];
}

export interface Movie {

    id: string; 
    poster_path: string;
    title: string;
    release_date: number;
    production_companies: any[];
    overview: string;
    genres: any[];
    teaser: any[]

}

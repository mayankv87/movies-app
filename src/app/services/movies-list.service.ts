import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Injectable()
export class MoviesService {
    constructor() { }
    movies: Movie[] = [];

    getMovies(): Promise<Movie[]> {
        return Promise.resolve(MOVIES);
    }

    getMovieDetail(id: number) {
        this.movies = MOVIES.filter(movie => movie.id === id);
        return this.movies;
    }
}


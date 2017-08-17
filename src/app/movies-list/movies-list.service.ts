import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Injectable()
export class MoviesService {
    constructor() { }
    movies: any;

    getMovies(): Movie[] {
        return MOVIES;
    }

}


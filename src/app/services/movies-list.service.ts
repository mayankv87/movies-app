import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Injectable()
export class MoviesService {
    constructor() { }

    /**
     * this method will return the promise resolved
     * response from mock data
     */
    getMovies(): Promise<Movie[]> {
        return Promise.resolve(MOVIES);
    }

    /**
     * this method will accept the id
     * and filter the results accordingly
     * and return the matched data
     * @param id
     */
    getMovieDetail(id: number) {
        return MOVIES.filter(movie => movie.id === id);
    }
}


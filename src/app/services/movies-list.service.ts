import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
    constructor(private http: Http) { }

    /**
     * this method will return the promise resolved
     * response from mock data
     */
    getMovies(): Promise<Movie[]> {
        return this.http.get('/api/movies')
        .map((res) => res.json()).toPromise();
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


import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies-list.service';
import { Movie } from '../movie';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.template.html',
    styleUrls: ['./movies-list.scss'],
    providers: [MoviesService]
})

export class MoviesListComponent {

    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    constructor(private moviesService: MoviesService) {
        this.moviesService = moviesService;
    }

    get movies () {
        return this.moviesService.getMovies();
    }

}



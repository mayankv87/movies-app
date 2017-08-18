import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';
import { Movie } from '../../movie';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.template.html',
    styleUrls: ['./movies-list.scss'],
    providers: [MoviesService]
})

export class MoviesListComponent {
    constructor(private moviesService: MoviesService) {
        this.moviesService = moviesService;
    }

    get movies () {
        return this.moviesService.getMovies();
    }

}



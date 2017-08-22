import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';
import { Movie } from '../../movie';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { Observable } from 'rxjs/Rx';
declare var jQuery: any;


@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.template.html',
    styleUrls: ['./movies-list.scss'],
    animations: [
        trigger('movieState', [
            state('inactive', style({
                opacity: '1'
            })),
            state('active', style({
                opacity: '0.7'
            })),
            transition('inactive => active', animate('10ms ease-in')),
            transition('active => inactive', animate('10ms ease-out'))
        ])
    ],
    providers: [MoviesService]
})

export class MoviesListComponent implements OnInit {

    movies: Movie[] = [];

    constructor(private moviesService: MoviesService) {
        this.moviesService = moviesService;
    }

    toggleState(movie) {
        movie.state = (movie.state === 'active' ? 'inactive' : 'active');
    }

    ngOnInit(): void {
        this.moviesService.getMovies()
            .then(movies => {
                this.movies = movies;
            });
    }
}



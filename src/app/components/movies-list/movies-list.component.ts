import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';
import { Movie } from '../../movie';
import {FilterPipe} from '../search/pipe';
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

            })),
            state('active', style({
                opacity: '0.8'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ],
    providers: [MoviesService]
})

export class MoviesListComponent implements OnInit {
    public state = 'inactive';
    movies: Movie[] = [];
    movieObj: Movie[] = [];
    searchTerm: string;
    constructor(private moviesService: MoviesService) {
        this.moviesService = moviesService;
    }

    toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }

    ngOnInit(): void {
        this.moviesService.getMovies()
            .then(movies => {
                this.movies = movies;
                this.movieObj = movies;
            });
    }
}



import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';
import { Movie } from '../../movie';
import { Observable } from 'rxjs/Rx';
declare var jQuery: any;

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.template.html',
    styleUrls: ['./movies-list.scss'],
    providers: [MoviesService]
})

export class MoviesListComponent implements OnInit {

    movies: Movie[] = [];
    searchTerm: string;
    constructor(private moviesService: MoviesService) {
        this.moviesService = moviesService;
    }

    filterMovies(srcString) {
        this.moviesService.searchMovies(srcString);
    }

    ngOnInit(): void {
        this.moviesService.getMovies()
            .then(movies => this.movies = movies);

        const keyups = Observable.fromEvent(jQuery('#searchMovie'), 'keyup')
            .map((e: KeyboardEvent) => e.target['value'])
            .debounceTime(400)
            .distinctUntilChanged();

        keyups.subscribe(data => {
            this.searchTerm = data;
        });
    }


    shouldDisplayMovie(name: string): boolean {
        if (this.searchTerm == null) {
            // there is no user defined search term to filter on, so display all
            return true;
        }
        return name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1;
    }
}



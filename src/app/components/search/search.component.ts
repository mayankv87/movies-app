import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.template.html',
    providers: [MoviesService]
})

export class SearchComponent {
    constructor(private movieservice: MoviesService) {
        this.movieservice = movieservice;
    }

    filterMovies(srcString) {
        this.movieservice.searchMovies(srcString);
    }
}

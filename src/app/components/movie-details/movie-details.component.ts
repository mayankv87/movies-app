import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.template.html',
    styleUrls: ['./movie-details.scss'],
    providers: [MoviesService]
})

export class MovieDetailsComponent implements OnInit {
    id: number;
    constructor(private movieservice: MoviesService, private route: ActivatedRoute) {
        this.movieservice = movieservice;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = Number(params['id']);
        });
    }

    get movies() {
        return this.movieservice.getMovieDetail(this.id);
    }
}

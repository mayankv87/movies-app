import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-rating',
    templateUrl: './rating.template.html'
})

export class RatingComponent implements OnInit {
    constructor() {}
    stars: number[] = [];
    @Input() ratings: number;

    ngOnInit() {
        for (let i = 0; i < Math.floor(this.ratings); i++) {
            this.stars.push(i);
        }
    }
}

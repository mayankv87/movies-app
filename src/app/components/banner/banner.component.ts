import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.template.html'
})

export class BannerComponent implements OnInit, OnDestroy {
    imgName: string;
    @Input() movies: any;
    timer;
    timerControl = new Subject<number>();
    subscription: any;
    constructor() { }

    changeImage(t) {
        if (t === 8) {
            this.timerControl.next(0);
        }
        this.imgName = this.movies[t].img;
    }

    ngOnInit() {
        this.timer = this.timerControl.switchMap(() => {
            return Observable.timer(0, 4000);
        });
        this.subscription = this.timer.subscribe((t) => {
            this.changeImage(t);
        });
        this.timerControl.next();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

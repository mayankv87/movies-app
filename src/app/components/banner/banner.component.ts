import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.template.html'
})

export class BannerComponent implements OnInit, OnDestroy {
    imgName = 'deadpool.jpg';
    @Input() movies: any;
    timer;
    timerControl = new Subject<number>();
    subscription: any;
    constructor() { }

    /**
     * this method will accept the timer value
     * for now only 8 images will be rotate in the banner
     * @param t
     */
    changeImage(t) {
        if (t === 7) {
            this.timerControl.next(0); // reset the timer
        }
        this.imgName = this.movies[t].img;
    }

    /**
     * ngOnInit lifecycle hook will create a observable
     * which is subscribed and call the function on every 4 sec
     * and change the image src
     */
    ngOnInit() {
        this.timer = this.timerControl.switchMap(() => {
            return Observable.timer(0, 4000);
        });
        this.subscription = this.timer.subscribe((t) => {
            this.changeImage(t);
        });
        this.timerControl.next(); // start the timer
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

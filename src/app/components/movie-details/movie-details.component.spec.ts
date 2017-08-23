import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { RatingComponent } from './../rating/rating.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Movie Details component', () => {
    let fixture: ComponentFixture<MovieDetailsComponent>;
    let component: MovieDetailsComponent;
    let el: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [],
            declarations: [RatingComponent, MovieDetailsComponent],
            imports: [RouterTestingModule]
        });
        fixture = TestBed.createComponent(MovieDetailsComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
    });

    it('should have defined', () => {
        expect(component).toBeDefined();
    });

});

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterMovies',
})

export class FilterMovies implements PipeTransform {
    transform(value: any, movieName: string, genres: string) {
        if (movieName) {
            movieName = movieName.toLowerCase();
            return value.filter(function (el: any) {
                return el.name.toLowerCase().indexOf(movieName) > -1;
            });
        }
        if (genres) {
            genres = genres.toLowerCase();
            return value.filter(function (el: any) {
                return el.genres.some(function (genre) {
                    return genre.toLowerCase().indexOf(genres) > -1;
                });
            });
        }
        return value;
    }
}

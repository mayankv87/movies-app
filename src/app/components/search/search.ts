import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterMovies',
})

export class FilterMovies implements PipeTransform {
    transform(value: any, input: string, genres: any) {
        const isGenresChecked = genres;
        if (input) {
            input = input.toLowerCase();
            if (!isGenresChecked) {
                return value.filter(function (el: any) {
                    return el.name.toLowerCase().indexOf(input) > -1;
                });
            } else {
                return value.filter(function (el: any) {
                    return el.genres.some(function (genre) {
                        return genre.toLowerCase().indexOf(input) > -1;
                    });
                });
            }
        }
        return value;
    }
}

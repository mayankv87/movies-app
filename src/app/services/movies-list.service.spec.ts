import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesService } from './movies-list.service';
import { MOVIES } from './../mock-movies';

describe('Movies Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesService]
    });
  });

  it('should create an instance', () => {
    expect(new MoviesService()).toBeTruthy();
  });

  it('should inject the service', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));

  describe('getMovies() method', () => {
    it('should return a resolved promise', async(inject([MoviesService], (service: MoviesService) => {
        service.getMovies().then((data) => {
          expect(data).toBe(MOVIES);
        });
    })));
  });

});

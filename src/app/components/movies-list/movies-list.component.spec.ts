import { TestBed, async, fakeAsync, tick, inject, ComponentFixture } from '@angular/core/testing';
import { MoviesListComponent } from './movies-list.component';
import { MoviesService } from './../../services/movies-list.service';
import { FormGroup, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { FilterPipe } from '../search/pipe';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('Movies List Component', () => {
  let fixture: ComponentFixture<MoviesListComponent>;
  let component: MoviesListComponent;
  let movieService: MoviesService;
  let el: DebugElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [MoviesService],
      declarations: [
        MoviesListComponent, FilterPipe
      ],
      imports: [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    movieService = TestBed.get(MoviesService);
    el = fixture.debugElement;
  });

  it('should have defined', () => {
    expect(component).toBeDefined();
  });

  describe('ngOnint hook', () => {
    it('should call service and list movies', fakeAsync(() => {
      component.ngOnInit();
      tick();
      fixture.detectChanges();
      expect(el.query(By.css('.thumbnail')).nativeElement).not.toBeNull();
    }));
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllMoviesComponent } from './show-all-movies.component';

describe('ShowAllMoviesComponent', () => {
  let component: ShowAllMoviesComponent;
  let fixture: ComponentFixture<ShowAllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

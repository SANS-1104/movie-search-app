import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTopMoviesComponent } from './get-top-movies.component';

describe('GetTopMoviesComponent', () => {
  let component: GetTopMoviesComponent;
  let fixture: ComponentFixture<GetTopMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTopMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTopMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

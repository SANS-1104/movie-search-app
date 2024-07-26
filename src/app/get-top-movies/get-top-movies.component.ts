import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apidata } from '../apidata';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-top-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './get-top-movies.component.html',
  styleUrls: ['./get-top-movies.component.css']
})
export class GetTopMoviesComponent {
  @Input() movie!: Apidata;
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apidata } from '../apidata';
import { ImdbService } from '../imdb.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowDetailsComponent implements OnInit {
  @Input() movie!: Apidata;

  constructor(private imdbService: ImdbService) {}

  ngOnInit() {
    // You can add any additional initialization logic here
  }
}

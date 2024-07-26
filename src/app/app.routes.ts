import { Routes } from '@angular/router';
import { ShowAllMoviesComponent } from './show-all-movies/show-all-movies.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';

export const routes: Routes = [
    {
        path:'',
        component: ShowAllMoviesComponent,
    },
    {
        path:'details/:id',
        component: ShowdetailsComponent,
    }
];

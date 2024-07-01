import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { AirportsComponent } from './airports/airports.component';
import { SeatsComponent } from './seats/seats.component';
//import { FlightsComponent } from './flights/flights.component';

export const appRoutes: Routes = [
    {path : 'flights',component:FlightsComponent },
    {path : 'seats', component:SeatsComponent},
    {path : 'airports', component:AirportsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];

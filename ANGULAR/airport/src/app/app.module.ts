import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { SeatsComponent } from './seats/seats.component';
//import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AirportsComponent } from './airports/airports.component';
import { FlightsComponent } from './flights/flights.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AirportsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SeatsComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

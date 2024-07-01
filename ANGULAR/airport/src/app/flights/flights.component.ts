import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
//import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-flights',
  //standalone: true,
  //imports: [],
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'] // Corrección aquí
})
export class FlightsComponent implements OnInit {
  data: any[] = [];
  legs: any[] = [];
  fares : any[] = [];
  seats : any [] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fillData();
  }

  fillData() {

    this.apiService.getSeats().subscribe(seats =>{
      this.seats = seats;
      //console.log (seats);
    })
    
    this.apiService.getFares().subscribe(fares => {
      this.fares =fares;
      //console.log(this.fares)

    })

    this.apiService.getLegs().subscribe(legs => {
      this.legs = legs;
      console.log(this.legs);
    })
    this.apiService.getFlights().subscribe(data => {
      this.data = data;
      //console.log(this.data);
    });
  }
}

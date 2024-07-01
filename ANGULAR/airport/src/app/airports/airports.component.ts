import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-airports',
  //standalone: true,
  //imports: [],
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit{
  airports : any[] = []

  constructor(private apiService : ApiService){

  } 

  ngOnInit(): void {
    this.fillAirports();
  }

  fillAirports() {
    this.apiService.getAirports().subscribe(airports => {
      this.airports = airports;
      console.log(this.airports);
    });
  }

  

  
  


}




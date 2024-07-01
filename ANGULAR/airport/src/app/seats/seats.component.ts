import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {
  seat_client: any[] = [];
  flights : any[] = [];
  reservation_result : any [] = [];
  phoneNumber: string = '';
  
  reservePhone: string = '';
  reserveName: string = '';
  reserveFlight: string = '';
  seatSection: string = '';
  seatNumber: string = '';

  seatSections: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  seatNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  flights_desplegable : string[] = ['1001', '1002', '1003', '1004', '1005']

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
    this.apiService.getFlights().subscribe(flights => {
      this.flights = flights;
      //.flights_desplegable = flights.map(flight => flight.flightNumber.toString());
    });

  }

  searchReservations() {

    
    
    this.apiService.getReservationsbyPhone(this.phoneNumber).subscribe(seats => {
      this.seat_client = seats;
      console.log(seats);
    });
  }

  makeReservation() {
    let number_section = this.seatNumber + this.seatSection;
    if (this.reserveFlight == "1001") {
      const reservation1001 = {
          "flightNumber": 1001,
          "legNumber": 1,
          "legDate": "2023-09-21",
          "seatNumber": number_section,
          "customerName": this.reserveName,
          "customerPhone": this.reservePhone,
          "flightLegInstance": {
              "flightNumber": 1001,
              "legNumber": 1,
              "legDate": "2023-09-21",
              "numberOfAvailableSeats": 100,
              "airplaneId": 12345,
              "departureTime": "2023-09-20T08:00:00.000+00:00",
              "arrivalTime": "2023-09-20T09:00:00.000+00:00",
              "flight": {
                  "flightNumber": 1001,
                  "airline": "AEROMEXICO",
                  "weekdays": "MONDAY",
                  "departureAirport": {
                      "airportCode": "MEX",
                      "airportName": "MEXICO CITY",
                      "city": "MEXICO",
                      "state": "MEXICO"
                  },
                  "arrivalAirport": {
                      "airportCode": "MTY",
                      "airportName": "MONTERREY",
                      "city": "MEXICO",
                      "state": "MEXICO"
                  }
              }
          }
      }
      this.apiService.makeFullReservation(reservation1001).subscribe(reservation_result =>{
        this.reservation_result = reservation_result;
        console.log(this.reservation_result)

      })
      
  }else if (this.reserveFlight=="1002"){
    const reservation1002 = {
        "flightNumber": 1002,
        "legNumber": 1,
        "legDate": "2023-09-21",
        "seatNumber": number_section,
        "customerName": this.reserveName,
        "customerPhone": this.reservePhone,
        "flightLegInstance": {
            "flightNumber": 1002,
            "legNumber": 1,
            "legDate": "2023-09-21",
            "numberOfAvailableSeats": 200,
            "airplaneId": 12346,
            "departureTime": "2023-09-20T10:00:00.000+00:00",
            "arrivalTime": "2023-09-20T13:00:00.000+00:00",
            "flight": {
                "flightNumber": 1002,
                "airline": "AEROMEXICO",
                "weekdays": "TUESDAY",
                "departureAirport": {
                    "airportCode": "MTY",
                    "airportName": "MONTERREY",
                    "city": "MEXICO",
                    "state": "MEXICO"
                },
                "arrivalAirport": {
                    "airportCode": "JFK",
                    "airportName": "NEW YORK",
                    "city": "NEW YORK",
                    "state": "USA"
                }
            }
        
    }

    }
    this.apiService.makeFullReservation(reservation1002).subscribe(reservation_result =>{
      this.reservation_result = reservation_result;
      console.log(this.reservation_result)

    })

  }else if (this.reserveFlight=='1003'){
    const reservation1003 = {
      "flightNumber": 1003,
      "legNumber": 1,
      "legDate": "2023-09-21",
      "seatNumber": number_section,
      "customerName": this.reserveName,
      "customerPhone": this.reservePhone,
      "flightLegInstance": {
          "flightNumber": 1003,
          "legNumber": 1,
          "legDate": "2023-09-21",
          "numberOfAvailableSeats": 150,
          "airplaneId": 12329,
          "departureTime": "2023-09-20T08:00:00.000+00:00",
          "arrivalTime": "2023-09-20T09:00:00.000+00:00",
          "flight": {
              "flightNumber": 1003,
              "airline": "VOLARIS",
              "weekdays": "WEDNESDAY",
              "departureAirport": {
                  "airportCode": "MEX",
                  "airportName": "MEXICO CITY",
                  "city": "MEXICO",
                  "state": "MEXICO"
              },
              "arrivalAirport": {
                  "airportCode": "MTY",
                  "airportName": "MONTERREY",
                  "city": "MEXICO",
                  "state": "MEXICO"
              }
          }
      }
  }
  this.apiService.makeFullReservation(reservation1003).subscribe(reservation_result =>{
    this.reservation_result = reservation_result;
    console.log(this.reservation_result)

  })
  }
    // Aquí puedes manejar la lógica para la reserva
    console.log('Reserva realizada:', {
      phone: this.reservePhone,
      name: this.reserveName,
      flight: this.reserveFlight
    });
    Swal.fire({
      title: 'Reservación Exitosa',
      text: 'La reservación ha sido realizada con éxito.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    
    // Limpiar campos después de la reserva
    this.reservePhone = '';
    this.reserveName = '';
    this.reserveFlight = '';
    this.seatNumber = '';
    this.seatSection = '';
  }
}


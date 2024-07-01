import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL_endpoint = 'http://localhost:8082/flights';
  private URL_flights_endpoint ='http://localhost:8082/airports'
  private URL_legs_endpoint = 'http://localhost:8082/flight-leg-instances'
  private URL_fares_endpoint = 'http://localhost:8082/fares';
  private URL_seats_endpoint = 'http://localhost:8082/seat-reservations'
  private baseURL = 'http://localhost:8082/seat-reservations/phone/';

  constructor(private http : HttpClient) { }

  public getFlights() : Observable<any>{
    return this.http.get<any>(this.URL_endpoint);
  }

  public getAirports() : Observable<any>{
    return this.http.get<any>(this.URL_flights_endpoint);
  }

  public getLegs( ) : Observable<any>{
    return this.http.get<any>(this.URL_legs_endpoint)
  }

  public getFares() : Observable<any>{
    return this.http.get<any>(this.URL_fares_endpoint)
  }

  public getSeats() : Observable<any>{
    return this.http.get<any>(this.URL_seats_endpoint)
  }

  public getReservationsbyPhone(phoneNumber: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}${phoneNumber}`);
  }

  public makeFullReservation (reservation : any): Observable<any>{
    return this.http.post<any>(`${this.URL_seats_endpoint}`, reservation)
  }

}

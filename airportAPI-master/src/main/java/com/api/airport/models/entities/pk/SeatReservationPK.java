package com.api.airport.models.entities.pk;

import java.io.Serializable;
import java.util.Date;
//import javax.persistence.*;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Embeddable
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SeatReservationPK implements Serializable {
    
    @Column(name = "FLIGHT_NUMBER")
    private int flightNumber;
    
    @Column(name = "LEG_NUMBER")
    private int legNumber;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "LEG_DATE")
    private Date legDate;
    
    @Column(name = "SEAT_NUMBER")
    private String seatNumber;

    // equals and hashCode methods should be implemented as well
}
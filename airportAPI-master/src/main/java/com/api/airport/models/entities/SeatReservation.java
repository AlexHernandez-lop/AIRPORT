package com.api.airport.models.entities;

import java.io.Serializable;
import java.util.Date;
import com.api.airport.models.entities.pk.SeatReservationPK;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
//import jakarta.persistence.ForeignKey;
import lombok.Data;

@Data
@Entity
@Table(name = "seat_reservation")
@IdClass(SeatReservationPK.class)
public class SeatReservation implements Serializable {

    @Id
    @Column(name = "FLIGHT_NUMBER", nullable = false)
    private Integer flightNumber;

    @Id
    @Column(name = "LEG_NUMBER", nullable = false)
    private Integer legNumber;

    @Id
    @Column(name = "LEG_DATE", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date legDate;

    @Id
    @Column(name = "SEAT_NUMBER", nullable = false, length = 4)
    private String seatNumber;

    @Column(name = "CUSTOMER_NAME", length = 18)
    private String customerName;

    @Column(name = "CUSTOMER_PHONE", length = 12)
    private String customerPhone;

    @ManyToOne
    @JoinColumns({
        @JoinColumn(name = "FLIGHT_NUMBER", referencedColumnName = "FLIGHT_NUMBER", insertable = false, updatable = false),
        @JoinColumn(name = "LEG_NUMBER", referencedColumnName = "LEG_NUMBER", insertable = false, updatable = false),
        @JoinColumn(name = "LEG_DATE", referencedColumnName = "LEG_DATE", insertable = false, updatable = false)
    })
    private FlightLegInstance flightLegInstance;
}

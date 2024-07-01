package com.api.airport.models.entities;

import com.api.airport.models.entities.pk.FarePK;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "FARE")
@Data
@IdClass(FarePK.class)
public class Fare {
    
    @Id
    @Column(name = "FLIGHT_NUMBER")
    private Integer flightNumber;
    
    @Id
    @Size(max = 1, message = "Fare code must have a maximum of 1 character")
    @Column(name = "FARE_CODE")
    private String fareCode;
    
    @Column(name = "AMOUNT")
    private Double amount;
    
    @Size(max = 3, message = "Restrictions must have a maximum of 3 characters")
    @Column(name = "RESTRICTIONS")
    private String restrictions;
    
    @ManyToOne
    @JoinColumn(name = "FLIGHT_NUMBER", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "FK_FARE_FLIGHT"))
    private Flight flight;
}

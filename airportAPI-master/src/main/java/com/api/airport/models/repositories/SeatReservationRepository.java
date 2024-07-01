package com.api.airport.models.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.api.airport.models.entities.SeatReservation;
import com.api.airport.models.entities.pk.SeatReservationPK;

public interface SeatReservationRepository extends CrudRepository<SeatReservation, SeatReservationPK>{
    List<SeatReservation> findByCustomerPhone(String customerPhone);
    
}
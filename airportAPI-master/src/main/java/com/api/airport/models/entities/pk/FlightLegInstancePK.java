package com.api.airport.models.entities.pk;

import java.io.Serializable;
import java.util.Date;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class FlightLegInstancePK implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer flightNumber;
    private Integer legNumber;
    private Date legDate;

    // Constructor con todos los campos
    public FlightLegInstancePK(Integer flightNumber, Integer legNumber, Date legDate) {
        this.flightNumber = flightNumber;
        this.legNumber = legNumber;
        this.legDate = legDate;
    }

    // Métodos equals y hashCode
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;

        FlightLegInstancePK other = (FlightLegInstancePK) obj;
        if (!flightNumber.equals(other.flightNumber))
            return false;
        if (!legNumber.equals(other.legNumber))
            return false;
        return legDate.equals(other.legDate);
    }

    @Override
    public int hashCode() {
        int result = flightNumber.hashCode();
        result = 31 * result + legNumber.hashCode();
        result = 31 * result + legDate.hashCode();
        return result;
    }
}

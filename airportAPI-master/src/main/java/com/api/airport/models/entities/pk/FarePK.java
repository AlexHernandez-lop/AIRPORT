package com.api.airport.models.entities.pk;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FarePK implements Serializable {
    private Integer flightNumber;
    private String fareCode;
}

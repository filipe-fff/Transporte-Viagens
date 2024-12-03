import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FlightsList } from "../types/flights-list";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class FlightsService {
    _httpClient = inject(HttpClient);


    getFlightsLit(
        state: string,
        dateMin: string,
        dateMax: string,
        priceEconomy: number | null,
        priceBusiness: number | null,
        priceFirstClass: number | null
    ): Observable<FlightsList | null> {

        return this._httpClient.post<FlightsList>("http://localhost:8080/airline/flightsByStateByTimeByDate", {
            state,
            dateMin,
            dateMax,
            priceEconomy,
            priceBusiness,
            priceFirstClass,
        });
    }
}
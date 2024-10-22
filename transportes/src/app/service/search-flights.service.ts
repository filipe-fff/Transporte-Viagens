import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SearchFlightsService {
    _httpClient = inject(HttpClient);

    getSearchFlights(
        cabinclass: string,
        country: string,
        currency: string,
        locale: string,
        locationSchema: string,
        originplace: string,
        destinationplace: string,
        outbounddate: string,
        inbounddate: string,
        adults: string,
        children: string,
        infants: string,
    ): Observable<any> {
        const apiUrl = "http://partners.api.skyscanner.net/apiservices/pricing/v1.0";
        const apiKey = "prtl6749387986743898559646983194";

        const headers = new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"});
        const body = new HttpParams()
            .set("cabinclass", cabinclass)
            .set("country", country)
            .set("currency", currency)
            .set("locale", locale)
            .set("locationSchema", locationSchema)
            .set("originplace", originplace)
            .set("destinationplace", destinationplace)
            .set("outbounddate", outbounddate)
            .set("inbounddate", inbounddate)
            .set("adults", adults)
            .set("children", children)
            .set("infants", infants)
            .set("apikey", apiKey);

        return this._httpClient.post(apiUrl, body.toString, { headers });
    }
}
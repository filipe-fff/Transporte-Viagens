import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { StatesList } from "../types/states-list";
import { IStateResponse } from "../interfaces/states/state-response.interface";

@Injectable({
    providedIn: "root",
})
export class StatesService {
    _httpClient = inject(HttpClient);

    getStates(countryName: string): Observable<StatesList> {
        return this._httpClient.post<IStateResponse>("https://countriesnow.space/api/v0.1/countries/states", { country: countryName }).pipe(map((statesResponse) => statesResponse.data.states));
    }
}
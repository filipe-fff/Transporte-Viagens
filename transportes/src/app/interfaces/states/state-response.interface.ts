import { StatesList } from "../../types/states-list";
import { ICountryBaseResponse } from "./country-base-response.interface";

export interface IStateResponse extends ICountryBaseResponse {
    data: {
        name: string;
        iso3: string;
        states: StatesList;
    }
}
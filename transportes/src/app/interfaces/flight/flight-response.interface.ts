import { PricesTypeList } from "../../types/prices-type-list";
import { IAirport } from "../airport.interface";

export interface IFlightResponse {
    id: number;
    date: string;
    time: string;
    pricesTypesList: PricesTypeList;
    flightOrigin: IAirport;
    flightDestination: IAirport;
}
import { PricesTypeDisplayList } from "../../types/prices-type-display-list";
import { IAirport } from "../airport.interface";

export interface IFlightDisplayCard {
    id: number;
    date: string;
    time: string;
    pricesTypesList: PricesTypeDisplayList;
    flightOrigin: IAirport;
    flightDestination: IAirport;
}
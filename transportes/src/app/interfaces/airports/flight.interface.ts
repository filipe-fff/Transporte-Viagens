import { FlightClassesList } from "../../types/flight-class-list";
import { IDisplacement } from "./displacement.interface";
import { IPrice } from "./price.interface";

export interface IFlight {
    destination: IDisplacement;
    date: string;
    time: string;
    flightClass: FlightClassesList;
}
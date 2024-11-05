import { BaggagesList } from "../../types/baggages-list";
import { FlightsList } from "../../types/flights-list";
import { IDisplacement } from "./displacement.interface";

export interface IAirportResponse {
    origin: IDisplacement;
    baggage: BaggagesList;
    flightsList: FlightsList;
}
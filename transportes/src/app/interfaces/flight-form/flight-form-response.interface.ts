import { IDate } from "./date.interface";
import { ILocation } from "./location.interface";
import { IPrice } from "./price.interface";

export interface IFlightFormResponse {
    price: IPrice;
    location: ILocation;
    date: IDate;
}
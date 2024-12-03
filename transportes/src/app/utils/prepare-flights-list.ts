import { IFlightResponse } from "../interfaces/flight/flight-response.interface";
import { IFlightDisplayCard } from '../interfaces/flight-display-card/flight-display-card.interface';
import { FlightClassTypeEnum } from '../enums/flight-class-type.enum';
import { PricesTypeDisplayList } from "../types/prices-type-display-list";
import { FlightClassTypeDescriptionMap } from './flight-class-type-description-map';


export const prepareFlightsList = (flightResponse: IFlightResponse, callback: (flight: IFlightDisplayCard) => void ): void => {
    const pricesTypeDisplayList: PricesTypeDisplayList = [];

    Object.keys(FlightClassTypeDescriptionMap).map(Number).forEach((typeResponse) => {
        const found = flightResponse.pricesTypesList.find((priceType) => priceType.type === typeResponse);
        
        if (found) pricesTypeDisplayList.push({
            type: found.type,
            typeDescription: FlightClassTypeDescriptionMap[typeResponse as FlightClassTypeEnum],
            price: found.price.toString()
        });
        else pricesTypeDisplayList.push({
            type: typeResponse,
            typeDescription: FlightClassTypeDescriptionMap[typeResponse as FlightClassTypeEnum],
            price: "-"
        })
    });

    const [hour, min, seg] = flightResponse.time.split(":");

    callback({
        ...flightResponse,
        pricesTypesList: pricesTypeDisplayList,
        date : flightResponse.date.replaceAll("-", "/"),
        time: hour + ":" + min,
    });
}
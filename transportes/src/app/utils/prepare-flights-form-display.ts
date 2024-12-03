import { IFlightFormResponse } from "../interfaces/flight-form/flight-form-response.interface";


export const onPrepareFlightsFormDisplay = (flightForm: IFlightFormResponse, callback: (flight: IFlightFormResponse) => void) => {

    const price = flightForm.price;
    const dateMin = flightForm.date.dateMin.replaceAll("-", "/");
    const dateMax = flightForm.date.dateMax.replaceAll("-", "/");

    callback({
        price: {
            economy: price.economy? price.economy : "-",
            business: price.business? price.business : "-",
            firstClass: price.firstClass? price.firstClass : "-",
        },
        location: flightForm.location,
        date: {
            dateMin: dateMin,
            dateMax: dateMax,
        }
    })
}
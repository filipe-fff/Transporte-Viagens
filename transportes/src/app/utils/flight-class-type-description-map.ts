import { FlightClassTypeEnum } from "../enums/flight-class-type.enum";

export const FlightClassTypeDescriptionMap: {[key in FlightClassTypeEnum]: string} = {
    [FlightClassTypeEnum.ECONOMY]: "Economica",
    [FlightClassTypeEnum.BUSINESS]: "Executiva",
    [FlightClassTypeEnum.FIRST_CLASS]: "Primeira Classe"
}